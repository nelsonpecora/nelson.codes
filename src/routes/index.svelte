<script>
	import { scrollto } from 'svelte-scrollto';
	import Wrapper from '../components/Wrapper.svelte';
	import Header from '../components/Header.svelte';
	import Heading from '../components/Heading.svelte';
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
	<p class="intro">Hi, I'm Nelson and I make <a href="#second" use:scrollto={'#second'}>web apps ↓</a></p>
</Wrapper>

<Wrapper>
	<div id="second">
		<Heading title="Latest Work" />
	</div>
</Wrapper>
