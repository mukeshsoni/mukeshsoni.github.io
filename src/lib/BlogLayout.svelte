<script>
	import PostHeader from '$lib/PostHeader.svelte';
	// if i don't add the exports here, i can't access title and date as props
	export let title;
	export let date;
</script>

<div class="post">
	<PostHeader {title} {date} />
	<slot />
</div>
