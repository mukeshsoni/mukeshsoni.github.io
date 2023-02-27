import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const { slug } = params;
	try {
		const post = await import(`/src/routes/blog/post-${slug}.md`);
		return {
			content: post.default
		};
	} catch (e) {
		return {
			error: 'Could not load page'
		};
	}
}) satisfies PageLoad;
