---
title: 'Bundling external libraries in Tauri App - for MacOS'
description: 'How to bundle dynamically linked libraries in a Tauri app. On macOS.'
pubDate: 'April 25 2025'
---

[Tauri](https://v2.tauri.app/) is a framework for building desktop applications. Sometimes you need some functionality for which you access some library on your system.
You do not want the users of your app to install those libraries separately. You want to bundle them with your app.

I was building a desktop application which used a rust crate called [rexiv2](https://crates.io/crates/rexiv2/0.10.0). `rexiv2` in turn depended on another crate named `gexiv2-sys`. And `gexiv2-sys` was simply provided FFI declarations for `gexiv2` library, which is a GObject-based wrapper around another library called `exiv2`. Which means, using `rexiv2` assumed that i had `gexiv2` and `exiv2` libraries installed on my system.

Installing `gexiv2` and `exiv2` on my mac was straight forward. I used `brew` to install them. But i couldn't expect all users of my app to have `gexiv2` and `exiv2` installed on their system. So i had to bundle them with my app.

## Bundling Libraries
I will first give the steps i followed to bundle external libraries with my Tauri app.

- Install the libraries which you need to be bundled with your app on your machine. This will make sure that your app runs alright during development.
- Install all the required crates and run your app once so that the binary has information about whatever library it depends on. You can check what libraries your binary depend on using the `otool` command like this - `otool -L target/src-tauri/debug/<your-app-name>`. If this doesn't show the libraries you expect, you might not have used the libraries in your code. So make sure you use the libraries in your code and run the app once.
- When you install the libraries using `brew`, brew will install the libraries in `/opt/homebrew/opt/<lib-name>/lib` folder. It might change based on the version of brew you are using. You can check the location of the libraries using `brew --prefix <lib-name>`. We want to copy the libraries from those locations and to a folder inside our Tauri app, say in `src-tauri/external-libs` folder. If we know exactly the libraries to be copied then we can do it manually. But a library we depend on can itself be dynamically linked to some other library. Which means we need to copy that library too. And that library can be linked to some other library. So we need to copy all the libraries which are linked to the libraries we depend on.

I used a tool called [dylibbundler](https://github.com/auriamg/macdylibbundler) to recursively determine all the required libraries and copy them to `src-tauri/external-libs` folder. The command i used is:
```bash
dylibbundler -od -b -x src-tauri/target/debug/<your-app-name> -d src-tauri/external-libs -p "@executable_path/../Frameworks"
```

We point `dylibbundler` to our app binary and `dylibbundler` does the rest.
The `dylibbundler` library not only copies the libraries but also
  - It modifies the `install_name` of the libraries to point to the new location. This is important because when your app runs, it will look for the libraries in the new location.
  - It changes the id of the libraries so that they match the new location.
- Once we have the libraries copied to `src-tauri/external-libs`, we need to tell Tauri to bundle them with the app. We can do this by adding the following lines to `tauri.conf.json` file:
```json
{
  "bundle": {
    "macOS": {
      "frameworks": [
        "./external-libs/libgexiv2.2.dylib"
        "./external-libs/libexiv0.28.5.dylib"
      ]
    }
  }
}
```
Here we are asking tauri to copy the library files to Frameworks folder inside the app bundle. I initially thought about putting the libraries in `Resources` folder, but Tauri documentation suggests putting `dylib` files in `Frameworks` folder - https://v2.tauri.app/distribute/macos-application-bundle/#including-macos-frameworks.
Another thing to note here is that we have to specify each library file inside `src-tauri/external-libs` folder individually in `tauri.conf.json` file. We cannot specify the folder itself or use a wildcard like `./external-libs/*`. Which also means that if `dylibbundler` changes the name of a library file in some run, we will need to manually update it in `tauri.conf.json` file.
- We will now add a script to run before the bundling step where we run `dylibbundler` to copy the libraries to `src-tauri/external-libs` folder. We do that by adding `build.beforeBundleCommand` in `tauri.conf.json` file.
```bash
  "build": {
   ...
    "beforeBundleCommand": "pnpm update_libs",
  }
```
We will then add the `update_libs` script to our `package.json`` file in root
```json
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "tauri": "tauri",
    "update_lib_paths": "dylibbundler -od -b -x src-tauri/target/release/<my-app-name> -d src-tauri/external-libs -p '@executable_path/../Frameworks'"
  },
```
This should now change for the executable correctly before we bundle the whole thing.
- The last step is to bundle the app - `pnpm tauri build --bundles app` and try running it from `src-tauri/target/release/bundle/macos/<your-app-name>.app`.
To verify that your bundled app is not using the libraries from your system, you can first uninstall the libraries from your system and then run your app. If everything went alright, your app should be running without any issues. You can also check the libraries your app is using by running `otool -L <your-app-name>.app/Contents/MacOS/<your-app-name>` command. This should show the library paths pointing to libraries inside the `Framewords` folder` and not the ones from your system.

## Conclusion
It wasn't straight forward to bundle the libraries with Tauri app. And the way i did it, i have to make sure that the libraries are copied to `src-tauri/external-libs` folder, if i have specified them in `bundle.macOS.frameworks` section in `tauri.conf.json`. Otherwise my normal dev builds would also fail.

Which means that the first time you run your app, you should not have anything in `bundle.macOS.frameworks` section in `tauri.conf.json`. You should run the app once, then run the `dylibbundler` command to copy the libraries to `src-tauri/external-libs` folder, and then add the libraries to `bundle.macOS.frameworks` section in `tauri.conf.json`.

And if you want to update the libraries, either change their version or add a new library or delete a library, you probably should go through the steps from the start. Which means, removing the `bundle.macOS.frameworks` section from `tauri.conf.json` and also removing `build.beforeBundleCommand` from `tauri.conf.json`. And go through the rest of the steps again.

If you want to not use `dylibbundler` tool and change the library paths and library ids manually, you can do that using the `install_name_tool` command. You can follow the instructions from this reddit post - https://www.reddit.com/r/tauri/comments/1k36yap/comment/moqzu8r/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button

## Resources
- [Tauri Documentation](https://v2.tauri.app/)
- [dylibbundler](https://github.com/auriamg/macdylibbundler)
- [otool](https://man.cx/otool(1))
- [install_name_tool](https://www.unix.com/man_page/osx/1/install_name_tool/)
