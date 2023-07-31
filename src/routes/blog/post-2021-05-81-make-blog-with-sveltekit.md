---
title: Make a blog with svelte kit and host on github (Updated on Feb 7 - 2023)
created: '2021-05-18'
slug: '2021-05-81-make-blog-with-sveltekit'
---

<svelte:head>

<title>Make a blog with svelte kit and host on github (Updated on Feb 7 - 2023)</title>
</svelte:head>

After reading this post, you should be able to make a blog using svelte kit, and host it on github or any other hosting service of your choice. You can write your posts as markdown files.

This post assumes that you know what svelte is and also what hosting a static site means. You can read more about svelte here - https://svelte.dev. And more about svelte kit here - https://kit.svelte.dev.

I recently moved by teeny tiny unmaintained blog from gatsby to svelte kit. Removing gatsby removed a lot of complexity which comes with gatsby. I no longer understood what was going on under the hood and was too scared to upgrade gatsby.

Switching to svelte-kit was relatively straight forward except for a few quirks. The quirks mainly had to do with rendering markdown as html and figuring out how to publish the final site through github.

If you don't want to read the whole article, you can checkout the final code here - https://github.com/mukeshsoni/mukeshsoni.github.io/tree/svelte.

### Step 1 - Setup svelte kit template

You can get started with svelte kit template using their `npm init` command -

```bash
npm create svelte@latest <project_name>
cd <project_name>
npm install
npm run dev -- --open
```

When you run `npm create svelte@latest <your_project_name>`, you will be asked a set of questions. E.g. Do you want to enable typescript in this project? Once you answer all the questions, the command will create a set of files in the <your_project_name> folder. Think of the command as a helper which chooses the right template for you.

Once the `create` command creates the files, you can go inside the folder and install the npm dependencies. The create command does not install the dependencies. It only specifies the list of dependencies in the package.json file.

After the dependencies are installed, you can invoke the `dev` script which is already defined in your `package.json` file by the `create` command - `npm run dev -- --open`. This should start a localhost server on port 5273. Whatever port it starts the server on will be shown on the terminal. `sveltekit` uses vite for building and serving the site.

### Step 2 - Add mdsvex to convert markdown files to html

```bash
npm install -D mdsvex
```

Add `mdsvex` preprocessor to your `svelte.config.js` file -

```javascript
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),

		mdsvex({
			extensions: ['.md'],
			layout: {
				blog: './src/routes/blog/post_layout.svelte'
			}
		})
	],
	// rest of the config
```

You will have to restart the dev server for mdsvex preprocessor to kick in.

We have also added link to blog post layout in `layout` option passed to `mdsvex` function. This tells `mdsvex` to use the `post_layout.svelte` layout for all the stuff rendered inside `blog` route. My `post_layout.svelte` file looks like this -

```svelte
<script>
	import PostHeader from '$lib/PostHeader.svelte';
	import Bio from '$lib/Bio.svelte';
	// if i don't add the exports here, i can't access title and created as props
	export let title;
	export let created;
</script>

<div class="post">
	<PostHeader {title} {created} />
	<slot />
	<br />
	<a href="/">Browse more posts</a>
	<hr />
	<h3>About me</h3>
	<Bio />
</div>
```

`PostHeader` and `Bio` are regular svelte component which are present inside `src/lib` folder. `<slot/>` is where the content of our markdown file will be put.

Try adding a markdown file called `+page.md` somewhere in your `routes` folder and going to the route pointed by the folder inside the `routes` folder. E.g. Add a file `src/routes/my-awesome-post/+page.md` and put some content in there. You should be able to view that content on `localhost:5173/my-awesome-post`.

Note that simply adding a markdown file with any name will not work. `sveltekit` after `v1.0.0` only treats files starting with `+page` or `+server` for routing purposes. This will give us some problem when trying to render our blog posts dynamically.

### Step 3 - Show a list of all blog posts on home page

We want to collect all our markdown files and show the list of blog posts on the home page or on some other path, so that our users can browse the super amazing content we publish.

We will create an api endpoint to get the list of posts. We will use `import.meta.glob` to get the metadata for each of the markdown files. . If we try to get the metadata using a glob pattern in our `routes/+page.svelte` file, it will load all the blog posts upfront too. Which might be a disaster if we have too many blogs posts or our posts are heavy.

So we create an endpoint which returns the metadata for blogs in
`/src/routes/api/posts/+server.ts` file. Just like sveltekit automatically treats any file called `+page.svelte` as a route file when it's inside the `routes` folder, it treats `+server.ts` (or `+server.js`) file as a server endpoint. We can define a function inside this file which might then respond to a `GET` or `POST` or `DELETE` or `UPDATE` http request. In our case we need it to respond to a `GET` request.

```typescript
// src/routes/api/posts/+server.ts file
import { json } from '@sveltejs/kit';

import type { RequestHandler } from '@sveltejs/kit';

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

export const GET = (async () => {
	const modules = import.meta.glob('../../blog/*.md');

	const posts: Array<Post> = [];

	await Promise.all(
		Object.entries(modules).map(async ([_, module]) => {
			const { metadata } = await module();

			posts.push(metadata);
		})
	);

	// Newest first
	posts.sort(dateSort);

	return json({
		posts: posts
	});
}) satisfies RequestHandler;
```

A few things to keep in mind for the above endpoint -

- We don't return our object directly but whatever `json` function exposed by sveltekit returns. If you look at the docs, it will tell you to return `new Response('your response')`. But that doesn't work for a json response. The `json` utility makes sure that the right headers are set for json response type.
- We make sure that our GET function adheres to `RequestHandler` type which helps us catch any type related bugs.

We will now fetch these posts using the endpoint we created. We create a `+page.ts` file inside `routes` folder, which is executed by sveltekit on both server and client before it renders `+page.svelte` file. The `+page.ts` file will export a `load` function which can return whatever it likes. Whatever is returned from the `load` function can then be accessed in `+page.svelte` as a variable named `data` by exporting it - `export let data`.

```typescript
// src/routes/+page.ts file
export async function load({ fetch }) {
	const response = await fetch('/api/posts');

	const { posts } = await response.json();
	return {
		posts
	};
}
```

Does having an endpoint mean that we need a server too? Ans - No. When we run
the build script, which runs the static adapter, the endpoint is called and the
post metadata is resolved before the final output is produced.

Now, posts should have the list of posts with their metadata, as defined by you at the top of each post. E.g. If you have this at the top of a post -

```md
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
	<a href="/blog/{post.metadata.slug}">
		<h2>{post.metadata.title}</h2>
	</a>
</li>
{/each}
```

Inside `+page.svelte` file

```svelte
<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<h2>Blog posts</h2>
	<ul class="posts">
		{#each data.posts as post}
			<li>
				<a rel="prefetch" href="blog/{post.slug}">
					<h2>
						{post.title}
					</h2>
				</a>
				<div class="date">
					{post.created}
				</div>
			</li>
		{/each}
	</ul>
</div>
```

### Step 4 - Add a layout component for the blog

If you have a header which you want to show for each page in the blog/site, you can add that as a layout component. For e.g. adding `routes/+layout.svelte` file, with a <slot></slot> component in it, will wrap every route content inside this layout component. Example layout component -

```html
<main style="max-width: 42rem;margin:auto">
	<h1 class="logo logo-big">
		<a class="header-link" href="/"> unstack.in </a>
	</h1>
	<slot />
</main>
```

You can read more about svelte kit layout components here - [https://kit.svelte.dev/docs/routing#layout](https://kit.svelte.dev/docs/routing#layout)

### Step 5 - Add a layout component for individual blog posts

This was trickier than i thought. At least my first attempt. And when i found the solution, it was not as tricky as i thought. At least not as tricky as trying to read this paragraph.

I thought i would utilize svelte-kit's layout capability, with `+layout.svelte` file in the blog folder. But I wanted the layout component for blog post to take care of the post title. My first attempt was to use the `load` function provided by `svelte-kit` and then fetching the metadata for the post by importing that file. That worked during development but didn't work with static adapter. Since i was importing file dynamically, it needed a server.

Then i found out about layouts in mdsvex. All i had to do was add a svelte component somewhere, say `src/routes/blog` folder, and then point mdsvex to that file. That is done in `mdsvex.config.cjs`

```javascript
// in svelte.config.js file somewhere
mdsvex({
	extensions: ['.md'],
	layout: {
		blog: './src/routes/blog/post_layout.svelte'
	}
});
```

And the `post_layout.svelte` component looked like this

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

### Step 6 - Rendering individual blog post

Let's say we have 20 odd blog posts on our blog. Each in their own markdown file. And we want to render them on a route like `<my-site>.com/blog/blog-post-title`. We cannot just create a file named `blog-post-title.md` inside `src/routes/blog/` folder and be done. Because those files will not be treated as routes by `sveltekit`. Remember, `sveltekit` only treats a file as a route if it starts with `+page`. So one way to render our blog posts would be to create one folder per blog post and then create a `+page.md` file inside each of those folders which then contains the post content. E.g.

```
src
	routes
		blog
			blog-post-title
				+page.md
			asinine-personal-details-post
				+page.md
			very-basic-trick-but-my-god-its-popular
				+page.md
			super-complicated-post-no-one-wants-to-read
				+page.md
			more-about-myself-me-me-me-me
				+page.md
```

Now we should be able to access `localhost:5173/blog/blog-post-title` or `localhost:5173/blog/asinite-personal-details-post`.

I actually like this technique since most of us don't write too many posts. I would bet most of us write less than 10 blog posts in our life time. And this is a perfectly file way to render those mostly asinine posts.

But we are certainly taking this much pain to render a super duper simple blog post because we like writing posts. We are doing it because we want to have some fun :). Let's look at another way to render the same blog posts in a more dynamic way.

#### Step 6.2 - Rendering blog post dynamically

Here's what we want to do -

- Put all our post related markdown files in one folder
- Write a script which then dynamically looks for the required file from the url, picks it up and renders it.

`sveltekit` supports something called dynamic routes for scenarios where we don't have fixed routes like `/about` or `/home` etc. We want our `/blog/blog-title` routes to automagically pick the right content.

`sveltekit` allows us to create a folder whose name looks like this `[some-name]` inside the `routes` folder. When `sveltekit` comes across such a folder, it will then forwards all request coming to that path, to the `+page.svelte` file inside that folder. E.g. if we create a folder like `src/routes/blog/[slug]/` then `sveltekit` will render the `+page.svelte` file inside `src/routes/blog/[slug]/` folder for request to `/blog/abc` or `/blog/new-post`. It will use the name `slug` inside the square brackets (`[]`) to pass as params property to `load` function in `+page.ts` file inside `[slug]` folder. E.g.

```typescript
// /src/blog/[slug]/+page.ts file
function load({ params }) {
	console.log(params.slug); // will print whatever comes after /blog/ in the url
}
```

We will now use the `load` function in `+page.ts` to load the blog post asked for

```typescript
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const { slug } = params;
	// try {
	const post = await import(`/src/routes/blog/post-${slug}.md`);
	return {
		content: post.default
	};
	// } catch (e) {
	// 	return {
	// 		error: 'Could not load page'
	// 	};
	// }
}) satisfies PageLoad;
```

We use `import` to import the intended blog post. If we don't file it in our file system, we return an error and hopefully also render an error page.

A few things to note above -

- One very weird thing happened when i had the `import` for the `md` file for the `slug` inside a try-catch block. The `adapter-static` could not figure out that it needed to prerender the `md` file and would try to load the `md` file from the route with a `GET` request. That would fail with a 404 http code. I removed the try-catch as seen in code above, and adapter-static started doing it's work perfectly.
- You will see in the above import is that i have a `post-` prefix before the `${slug}.md` part of the file name for the blog post. We need that because otherwise vite complains that it's not able to resolve the dynamic import. It needs some prefix to narrow down the list of files to look at inside the folder.

When use use `import` to get our `md` file, it is automatically passed through `mdsvex` which then returns a svelte component for the imported `md` file. We return that svelte component as `content` property from whatever object is returned from `load` function. This `svelte` component returned by `import` cannot be render directly. We need to use `<svelte:compoennt>` directive to render a svelte component dynamically.

We do that inside `src/blog/[slug]/+page.svelte` file -

```svelte
<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div>
	<svelte:component this={data.content} />
</div>
```

Now we should be in a good place to render all our blog posts dynamically. Not that it matters.

### Step 7 - Hosting the blog on github

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
		})
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
