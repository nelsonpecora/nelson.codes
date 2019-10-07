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
		bottom: 70px;
		font-size: 24px;
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
	<a class="intro" href="#second" on:click={scroll}>Hi, I'm Nelson and I make web apps ↓</a>
</Wrapper>

<Wrapper>
	<div id="second">
		<Heading title="Latest Work" />
	</div>
</Wrapper>
