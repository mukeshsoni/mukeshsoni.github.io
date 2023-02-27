import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch('/api/blog', {
		headers: {
			'content-type': 'application/json'
		}
	});
	const { posts } = await response.json();

	return {
		props: {
			posts
		}
	};
}) satisfies PageLoad;
