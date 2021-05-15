<script context="module">
	/*
	 * Wrote this component so that each blog post doesn't have to add the title at top on their own.
	 */
	export async function load({ page }) {
		const pathParts = page.path.split('/');
		const blogName = pathParts[pathParts.length - 1];
		let post;

		try {
			post = await import(`./${blogName}.svx`);
		} catch (e) {
			console.log('Could not find post for ', blogName, e);
		}

		if (post) {
			return {
				props: { metadata: post.metadata }
			};
		} else {
			return {};
		}
	}
</script>

<script>
	export let metadata;
</script>

<div class="post">
	{#if metadata && metadata.title}
		<h2 style="margin-bottom: 0">{metadata.title}</h2>
		<div class="date">{metadata.date}</div>
	{/if}
	<slot />
</div>
