<script>
	import Wrapper from '../components/Wrapper.svelte';
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	.centered {
		align-items: center;
		display: flex;
		flex-flow: column nowrap;
		height: 100vh;
		justify-content: center;
	}

	a {
		font-size: 20px;
		text-align: center;
	}
</style>

<svelte:head>
	<title>{status} | Nelson Pecora</title>
	<meta property="og:title" content="{status} | Nelson Pecora">
	<meta property="twitter:title" content="{status} | Nelson Pecora">
	<meta property="og:url" content="https://nelson.codes">
	<meta property="twitter:url" content="https://nelson.codes">
</svelte:head>

<Wrapper theme="dark">
	<div class="centered">
		<h1>{status} {error.message}</h1>

		<a href="/">← Go home</a>

		{#if dev && error.stack}
			<pre>{error.stack}</pre>
		{/if}
	</div>
</Wrapper>
