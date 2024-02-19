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

<svelte:head>
  <meta name="description" content="JavaScript Developer and architect of content management systems" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:description" content="JavaScript Developer and architect of content management systems">
  <meta property="og:image" content="/logo-social.png">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:description" content="JavaScript Developer and architect of content management systems">
  <meta property="twitter:image" content="/logo-social.png">
</svelte:head>

<main>
	<slot></slot>
	<Contact />
</main>
