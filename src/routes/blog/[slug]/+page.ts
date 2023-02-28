export const prerender = true;
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const { slug } = params;
	// TODO: Don't uncomment the try-catch block. For some strange reason, having the
	// import for the markdown file inside the try-catch block breaks adapter-static when
	// trying to render the blog post dynamically. Gives a 404. It's works during development
	// though
	// try {
	const post = await import(`../post-${slug}.md`);
	return {
		content: post.default
	};
	// } catch (e) {
	// 	return {
	// 		error: 'Could not load page'
	// 	};
	// }
}) satisfies PageLoad;
