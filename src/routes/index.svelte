<script context="module" lang="ts">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch }) {
		const response = await fetch('/blog.json')

		const {posts} = await response.json()
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

	<h2 style="margin-bottom: 2rem;">
		<a href="/resume" style="box-shadow: none;">/resume/</a>
	</h2>

	<div>
		<h2>Blog posts</h2>
		<ul class="posts">
			{#each posts as post}
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
</div>
