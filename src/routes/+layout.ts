// Adding the layout.js file specifically to signal svelte to prerender all routes.
// Since layout is present in every single route
export const prerender = true;
import type { PageLoad } from './$types';

export const load = (({ url }) => {
	const currentRoute = url.pathname;

	return {
		currentRoute
	};
}) satisfies PageLoad;
