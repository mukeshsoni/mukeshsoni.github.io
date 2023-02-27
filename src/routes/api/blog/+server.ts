import { json } from '@sveltejs/kit';
import { parse } from 'path';

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

export const GET: RequestHandler = async () => {
	const modules = import.meta.glob('../../blog/**/*.md');

	const posts = [];

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
};
