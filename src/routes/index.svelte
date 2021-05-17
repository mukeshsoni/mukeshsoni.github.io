<script context="module" lang="ts">
	const posts = import.meta.glob('./blog/*.md');
	let body = [];
	for (const path in posts) {
		body.push(posts[path]().then((post) => post));
	}

	function dateSort(a, b) {
		return new Date(b.metadata.date) - new Date(a.metadata.date);
	}
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch }) {
		const posts = await Promise.all(body);
		posts.sort(dateSort);
		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	import Bio from '$lib/Bio.svelte';
	export let posts;
</script>

<svelte:head>
	<title>unstack.in blog</title>
</svelte:head>

<div>
	<Bio />

	<h3 style="margin-bottom: 2rem;">
		<a href="/resume" style="box-shadow: none;">/resume/</a>
	</h3>

	<div>
		<h2>Recent posts</h2>
		<ul class="posts">
			{#each posts as post}
				<li>
					<a rel="prefetch" href="blog/{post.metadata.slug}">
						<h2>
							{post.metadata.title}
						</h2>
					</a>
					<div class="date">
						{post.metadata.date}
					</div>
				</li>
			{/each}
		</ul>
	</div>
</div>
