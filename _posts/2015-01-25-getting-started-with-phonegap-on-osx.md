---
layout: page
title: Getting started with phonegap on OSX
---


Install phonegap using npm

```
npm install -g phonegap
```

Check if phonegap is install properly

```
phonegap -v
```

Want a quick overview of what you can do with phonegap command line tool?
   
``` 
phonegap -h
```
    
Now lets create a new phonegap project. The phonegap command itself takes subcommands to do stuff. To create a new project we use 

```
phonegap create <folder> -n <appname> -i <packagename>
```

To see the options available while creating a new project, simply ask for help

```
phonegap create help
```

This is true for getting help on any of the sub commands. Let's create a new project - 

```
phonegap create awesome_app -n AwesomeApp -i com.example.awesomeapp
```

The folder awesome_app should be empty. 

Now it's time to see our newly created app in action. Let's move to the directory and build the app for the required platform (android, iphone etc)

```
cd awesome_app
phonegap build android
phonegap install android
```

Phonegap has a single sub command which combines the last two sub commands (build and install) - 

```
phonegap run android
```

*I am assuming here that you have android sdks installed in your system and have correctly setup the paths.
*

Now you should have see the default phonegap application on the android simulator. You can connect an android phone and run the application on the device using this command - 

```
phonegap run android --device
```

Make sure that you have enabled the 'USB Debugging' mode in your phone developer settings. Google it you don't know what i mean.

**How did it work?**

When we did `phonegap build android`, phonegap took whatever was in the www directory and packaged that along with the required phonegap.js (or cordova.js) file and made an apk out of it. `phonegap install android` then installs the apk on the phone. On the phone, phonegap shows throws the html+js+css content into a webview which knows how to render it. So all you have to do know how to write html, javascript and css and you are good to go.

Android simulator is very very very slow. So it's a better idea to run the app on a device. Even better idea is to use phonegap app. Go to [app.phonegap.com](http://app.phonegap.com) on instructions on how to install the app on your phone. All you need to do is run `phonegap serve` from the project directory. It will spawn a web server and show you the address on which it is running (something like 192.168.1.103:3000). Now install the phonegap app on your phone from the Google play store. Enter the server address from above into the app and you should see your app on the phone. Make some change to the index.html file in the www directory and save. You should see the change automatically on your phone. Pretty awesome actually. No usb connection required for this and the server keeps watching your files for changes and automatically pushes the new app. And it's fast.


Go ahead and take a look into the contents of www directory. This is where you will be working all the time. If you are a web developer you will be right at home. Make some changes to the index.html file and see your app changing. 

We will look into how to change the default application and make something more useful in future blog posts.