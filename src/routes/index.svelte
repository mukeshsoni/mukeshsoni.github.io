<script context="module" lang="ts">
	const posts = import.meta.glob('./blog/*.svx');
	let body = [];
	for (const path in posts) {
		body.push(posts[path]().then((post) => post));
	}

	function dateSort(a, b) {
		const dateA = a.metadata.date;
		const dateB = b.metadata.date;

		const [yearA, monthA, dayA] = dateA.split('-');
		const [yearB, monthB, dayB] = dateB.split('-');

		if (yearA - yearB !== 0) {
			return yearB - yearA;
		} else if (monthA - monthB !== 0) {
			return monthB - monthA;
		} else {
			return dayB - dayA;
		}
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
				<li class="list-none">
					<a class="text-blue-500 space-y-3" rel="prefetch" href="blog/{post.metadata.slug}">
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
