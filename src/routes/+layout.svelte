<script context="module">
	import { fade } from 'svelte/transition';

	export function load({ url }) {
		return {
			props: {
				// if we are on some root paths, we want the main heading to be big, otherwise super small
				onRoot: url.pathname === '/' || url.pathname === '/blog'
			}
		};
	}
</script>

<script lang="ts">
	import type { PageData } from './$types';
	import '../global.css';

	export let onRoot = false;
	export let data: PageData;
</script>

{#key data.currentRoute}
	<main
		style="max-width: 42rem;margin:auto"
		in:fade={{ duration: 100, delay: 100 }}
		out:fade={{ duration: 100 }}
	>
		<h1 class={onRoot ? 'logo logo-big' : 'logo logo-small'}>
			<a class="header-link" href="/"> unstack.in </a>
		</h1>

		<slot />
	</main>
{/key}

<style>
	.header-link {
		color: inherit;
		box-shadow: none;
		text-decoration: none;
	}

	.logo {
		margin-top: 0;
	}

	.logo-big {
		font-size: 4rem;
		transition: all 0.1s ease-in-out;
	}

	.logo-small {
		font-size: 1.5rem;
		transition: all 0.1s ease-in-out;
	}
</style>
