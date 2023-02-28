<script lang="ts">
	import Bio from '$lib/Bio.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
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
			{#each data.posts as post}
				<li>
					<a href="/blog/{post.slug}">
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
