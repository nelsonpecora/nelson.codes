<script>
	import Contact from '../components/Contact.svelte';
</script>

<style>
	main {
		position: relative;
		background-color: #FBF5F3;
		padding: 0;
		margin: 0;
	}
</style>

<main>
	<slot></slot>
	<Contact />

</main>
