<script context="module" lang="ts">
	const posts = import.meta.glob('./*.svx');
	let body = [];
	for (const path in posts) {
		body.push(posts[path]().then((post) => post));
	}
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch }) {
		const posts = await Promise.all(body);
		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	export let posts;
</script>

<svelte:head>
	<title>unstack.in blog</title>
</svelte:head>

<div class="font-sans">
	<h1 class="font-sans break-normal text-white pt-6 pb-2 text-3xl md:text-4xl">Recent posts</h1>

	<ul class="list-none">
		{#each posts as post}
			<li class="list-none">
				<a class="text-blue-500 space-y-3" rel="prefetch" href="blog/{post.metadata.slug}">
					<h2>
						{post.metadata.title}
					</h2>
				</a>
				<div>
					{post.metadata.date}
				</div>
			</li>
		{/each}
	</ul>
</div>
