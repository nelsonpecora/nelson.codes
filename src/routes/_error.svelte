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

	h1 {
		font-size: 50px;
	}

	p {
		font-size: 20px;
		text-align: center;
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<Wrapper style="dark">
	<div class="centered">
		<h1>{status}</h1>

		<p>
			{error.message}
			<br />
			<a href="/">← Go home</a>
		</p>

		{#if dev && error.stack}
			<pre>{error.stack}</pre>
		{/if}
	</div>
</Wrapper>
