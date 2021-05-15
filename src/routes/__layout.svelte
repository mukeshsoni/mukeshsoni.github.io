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
	<h1 class={onRoot ? 'logo-big' : 'logo-small'}>
		<a class="header-link" href="/"> unstack.in </a>
	</h1>

	<slot />
</main>

<style>
	.header-link {
		color: inherit;
		box-shadow: none;
		text-decoration: none;
	}
	.logo-big {
		font-size: 4rem;
		transition: all 0.2s ease-in-out;
	}

	.logo-small {
		font-size: 1.5rem;
		transition: all 0.2s ease-in-out;
	}
</style>
