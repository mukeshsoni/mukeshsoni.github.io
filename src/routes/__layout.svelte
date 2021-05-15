<script context="module">
	export function load({ page }) {
		return {
			props: {
				// if we are on some root paths, we want the main heading to be big, otherwise super small
				onRoot: page.path === '/' || page.path === '/blog'
			}
		};
	}
</script>

<script>
	import '../global.css';
	export let onRoot = false;
</script>

<main style="max-width: 42rem;margin:auto">
	{#if onRoot}
		<h1 style="font-size: 4rem; font-weight: 900;">
			<a class="header-link" href="/"> unstack.in </a>
		</h1>
	{:else}
		<h1 style="font-size: 1.3rem; font-weight: 700;">
			<a class="header-link" href="/"> unstack.in </a>
		</h1>
	{/if}

	<slot />
</main>

<style>
	.header-link {
		color: inherit;
		box-shadow: none;
		text-decoration: none;
	}
</style>
