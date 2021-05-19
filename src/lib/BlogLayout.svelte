<script>
	import PostHeader from '$lib/PostHeader.svelte';
	import Bio from './Bio.svelte'
	// if i don't add the exports here, i can't access title and date as props
	export let title;
	export let date;
</script>

<div class="post">
	<PostHeader {title} {date} />
	<slot />
	<br />
	<a href='/'>Browse more posts</a>
	<hr />
	<h3>About me</h3>
	<Bio />
</div>
