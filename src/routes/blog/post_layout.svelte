<script>
	import PostHeader from '$lib/PostHeader.svelte';
	import Bio from '$lib/Bio.svelte';
	// if i don't add the exports here, i can't access title and created as props
	export let title;
	export let created;
</script>

<div class="post">
	<PostHeader {title} {created} />
	<slot />
	<br />
	<a href="/">Browse more posts</a>
	<hr />
	<h3>About me</h3>
	<Bio />
</div>
