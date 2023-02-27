import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import adapter from '@sveltejs/adapter-static';

const mdsvexExtensions = ['.md'];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexExtensions],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),

		mdsvex({
			extensions: mdsvexExtensions,
			// Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
			smartypants: {
				dashes: 'oldschool'
			},
			layout: {
				blog: './src/routes/blog/post_layout.svelte'
			}
		})
	],

	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};

export default config;
