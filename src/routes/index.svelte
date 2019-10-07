<script>
	import { onMount } from 'svelte';
	import Wrapper from '../components/Wrapper.svelte';
	import Header from '../components/Header.svelte';
	import Heading from '../components/Heading.svelte';

	let animateScroll;

  onMount(async () => {
    animateScroll = await import('svelte-scrollto');
  })

  function scroll () {
    animateScroll.scrollTo({ element: '#second' });
  }
</script>

<style>
	.intro {
		bottom: 40px;
		position: absolute;
		text-align: center;
		width: 100%;
	}
</style>

<svelte:head>
	<title>Nelson Pecora</title>
</svelte:head>

<Wrapper splash={true} theme="dark">
	<Header sticky={false} theme="dark" />
	<p class="intro">Hi, I'm Nelson and I make <a href="#second" on:click={scroll}>web apps ↓</a></p>
</Wrapper>

<Wrapper>
	<div id="second">
		<Heading title="Latest Work" />
	</div>
</Wrapper>
