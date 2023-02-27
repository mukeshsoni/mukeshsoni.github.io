---
title: Make a blog with svelte kit and host on github
created: '2021-05-18'
slug: '2021-05-81-make-blog-with-sveltekit'
---

<svelte:head>

<title>Make a blog with svelte kit and host on github</title>
</svelte:head>

After reading this post, you should be able to make a blog using svelte kit, and host it on github or any other hosting service of your choice. You can write your posts as markdown files.

This post assumes that you know what svelte is and also what hosting a static site means. You can read more about svelte here - https://svelte.dev. And more about svelte kit here - https://kit.svelte.dev.

I recently moved by teeny tiny unmaintained blog from gatsby to svelte kit. Removing gatsby removed a lot of complexity which comes with gatsby. I no longer understood what was going on under the hood and was too scared to upgrade gatsby.

Switching to svelte-kit was relatively straight forward except for a few quirks. The quirks mainly had to do with rendering markdown as html and figuring out how to publish the final site through github.

If you don't want to read the whole article, you can checkout the final code here - https://github.com/mukeshsoni/mukeshsoni.github.io/tree/svelte.

### Step 1 - Setup svelte kit template

You can get started with svelte kit template using their `npm init` command -

```bash
npm init svelte@next <project_name>
cd <project_name>
npm install
npm run dev -- --open
```

When you run `npm init svelte@next <your_project_name>`, you will be asked a set of questions. E.g. Do you want to enable typescript in this project? Once you answer all the questions, the command will create a set of files in the <your_project_name> folder. Think of the command as a helper which chooses the right template for you.

Once the init command creates the files, you can go inside the folder and install the npm dependencies. The init command does not install the dependencies. It only specifies the list of dependencies in the package.json file.

After the dependencies are installed, you can invoke the `dev` script which is already defined in your `package.json` file by the `init` command - `npm run dev -- --open`. This should start a localhost server on port 3000.

### Step 2 - Add mdsvex to convert markdown files to html

```bash
npx svelte-add mdsvex
```

`svelte-add mdsvex` will make necessary changes to `package.json` to add the required dependencies, add a mdsvex config file and change the `svelte.config` file to add mdsvex as a preprocessor.

You will have to restart the dev server for mdsvex preprocessor to kick in.

Try adding a markdown file in your routes folder and going to the route pointed by the markdown file name. E.g. Add a file `src/routes/my-awesome-post.md` and put some content in there. You should be able to view that content on `localhost:3000/my-awesome-post`.

### Step 3 - Show a list of all blog posts on home page

We want to collect all our markdown files and show the list of blog posts on the home page or on some other path, so that our users can browse the super amazing content we publish.

We will use `import.meta.glob` to get the metadata for each of the markdown files. We will create an endpoint to get the metadata for a post. If we try to get the metadata using a glob pattern in our `routes/index.svelte` file, it will load all the blog posts upfront too. Which might be a disaster if we have too many blogs posts or our posts are heavy.

So we create an endpoint which returns the metadata for blogs in
`/src/routes/blog/index.json.ts` file. It won't work if you name your file
`index.json.js` and had selected typescript when creating the project with `npm init svelte@next`.

```javascript
interface Post {
	created: string;
	title: string;
	slug: string;
}

function dateSort(a: Post, b: Post) {
	// have to use getTime to satisfy typescript
	// And if i make this file a js file, the endpoint is not detected since
	// it's a typescript svelte project
	return new Date(b.created).getTime() - new Date(a.created).getTime();
}

export const get: RequestHandler = async () => {
	const modules = import.meta.glob('./**/*.md');

	const posts = [];


	await Promise.all(
		Object.entries(modules).map(async ([_, module]) => {
			const { metadata } = await module();

			posts.push(metadata)
		})
	);

	// Newest first
	posts.sort(dateSort);

	return {
		body: {
			posts: posts
		}
	};
```

And then fetch the metadata for a post in our `src/routes/index.svelte` file, or
wherever you show the list of blog posts.

```html
<script context="module" lang="ts">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		const response = await fetch('/blog.json');

		const { posts } = await response.json();
		return {
			props: {
				posts
			}
		};
	}
</script>
```

Does having an endpoint mean that we need a server too? Ans - No. When we run
the build script, which runs the static adapter, the endpoint is called and the
post metadata is resolved before the final output is produced.

adapter
Now, posts should have the list of posts with their metadata, as defined by you at the top of each post. E.g. If you have this at the top of a post -

```
---
title: Make a blog with svelte kit and host on github
date: '2021-05-18'
slug: '2021-05-81-make-blog-with-sveltekit'
---
```

That post's metadata would be an object and look like this

```json
{
	title: Make a blog with svelte kit and host on github,
	date: '2021-05-18',
	slug: '2021-05-81-make-blog-with-sveltekit',
}
```

You can then render whatever metadata you want to.

```html
{#each posts as post}
<li>
	<a rel="prefetch" href="blog/{post.metadata.slug}">
		<h2>{post.metadata.title}</h2>
	</a>
</li>
{/each}
```

### Step 4 - Add a layout component for the blog

If you have a header which you want to show for each page in the blog/site, you can add that as a layout component. For e.g. adding `routes/__layout.svelte` file, with a <slot></slot> component in it, will wrap every route content inside this layout component. Example layout component -

```html
<main style="max-width: 42rem;margin:auto">
	<h1 class="logo logo-big">
		<a class="header-link" href="/"> unstack.in </a>
	</h1>
	<slot />
</main>
```

You can read more about svelte kit layout components here - [https://kit.svelte.dev/docs#layouts](https://kit.svelte.dev/docs#layouts)

### Step 5 - Add a layout component for individual blog posts

This was trickier than i thought. At least my first attempt. And when i found the solution, it was not as tricky as i thought. At least not as tricky as trying to read this paragraph.

I thought i would utilize svelte-kit's layout capability, with `__layout.svelte` file in the blog folder. But I wanted the layout component for blog post to take care of the post title. My first attempt was to use the `load` function provided by `svelte-kit` and then fetching the metadata for the post by importing that file. That worked during development but didn't work with static adapter. Since i was importing file dynamically, it needed a server.

Then i found out about layouts in mdsvex. All i had to do was add a svelte component somewhere, say lib folder, and then point mdsvex to that file. That is done in `mdsvex.config.cjs`

```javascript
module.exports = {
	layout: {
		blog: './src/lib/BlogLayout.svelte'
	}
	// rest of the mdsvex config file
};
```

And the BlogLayout.svelte component looked like this

```html
<script>
	import PostHeader from '$lib/PostHeader.svelte';
	// if i don't add the exports here, i can't access title and date as props
	export let title;
	export let date;
</script>

<div class="post">
	<PostHeader {title} {date} />
	<slot />
</div>
```

Now all my blog posts had a title and date at the top. The layout component also enabled styling the container for each post, if i wanted to.

More about `mdsvex` layout components here - [https://mdsvex.pngwn.io/docs#layouts](https://mdsvex.pngwn.io/docs#layouts)

### Step 6 - Hosting the blog on github

Github allows static site hosting in 2 ways - either as a user site or as a project site. You can read more about github hosting [here](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages). I have my site hosted as a user site. Which meant i had to push the output of the static adapter to my master branch. But what is this static adapter thingy?

svelte kit provides various adapters to convert your site in ways which are suited for your deployment environemnt. In our case, we want the site to be hosted on github (or netlify etc.) as a static site. No server. Just html pages with some css and js. For that, we use the [svelte-kit static adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-static)

#### Install svelte static adapter

We can install the static adapter from npm.

```bash
npm i -D @sveltejs/adapter-static@next
```

We then have to change the svelte config to tell it to use static adapter -

```javascript
import staticAdapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [mdsvex(mdsvexConfig), preprocess()],

	kit: {
		adapter: staticAdapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};
```

#### Generate content to host as static site

Once we have setup the static adapter, calling `npm run build` on the terminal should generate the build folder.

```
npm run build
cd build
npx serve
```

We can test the build by going inside the build folder and using `serve` or any other server to serve the files. `serve` starts a server on `localhost:5000` by default.

#### Install gh-pages and deploy site

Now that we have the built files, we have to push them to the master branch, for user site, or to the `gh-pages` branch for a project site. Once we update the branch and push to github, github will then deploy the files for us and we should be able to see our site come alive.

`gh-pages` is a handy tool to push the contents of any folder to any other branch in your repository. Installing `gh-pages` is straight forward with npm.

```bash
npm install -D gh-pages
```

I then added an npm script to make deployment easy -

```json
"scripts": {
	"deploy": "npm run build && gh-pages -b master -d build -t"
},

```

If you are deploying a project site, you can remove the `-b master` flag from gh-pages command. `gh-pages` pushes to `gh-pages` branch by default.

`gh-pages` will also push the branch to remote. So if all goes well, you should be able to see your site live after some time.

#### Fixing \_apps/_.js and \_apps/_.css paths returning 404 on the deployed site

After you deploy your site by pushing the github branch, you will probably see your site looking a little different to what it looks on your development environment. That's because some of the js and css is missing. If you open the devtools and then the network tab, a number of js and css files might be returning 404. All of those would be serving files from inside the `__app` folder. That is because github does not deploy the `__app` folder. All folders starting with an `_` are to be ignored for sites built with [jekyll](https://jekyllrb.com/docs/). Read more about it [here](https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/).

To get around the problem, we have to add an empty file named `.nojekyll` to our static folder. `npm run build` will then copy that file to the `build` folder and `gh-pages` will then push that file to the required github branch.

You might find that it still doesn't work. Mainly because `gh-pages` is not pushing the `.nojekyll` file to the github branch, because `gh-pages` tool ignores all files starting with a `.` (dot). We can tell the `gh-pages` tool to also push dot files from the build folder by using the `-t` flag. If you copied the deploy command from above, it's already there.

That is it! Go ahead and add a lot of blog posts as markdown files and deploy to your site. I am kidding. Building the blog with svelte kit was fun though.

Link to final code - https://github.com/mukeshsoni/mukeshsoni.github.io/tree/svelte
