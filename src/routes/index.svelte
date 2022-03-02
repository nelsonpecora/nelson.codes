<script>
	import { onMount } from 'svelte';
	import Wrapper from '../components/Wrapper.svelte';
	import Header from '../components/Header.svelte';
	import Heading from '../components/Heading.svelte';
	import Project from '../components/Project.svelte';
	import projects from '../components/projects.json';

	let animateScroll;
	let projectsToShow = 2;

	$: filteredProjects = projects.slice(0, projectsToShow);
	$: showMore = filteredProjects.length < projects.length;

  onMount(async () => {
    animateScroll = await import('svelte-scrollto');
  })

  function scroll () {
    animateScroll.scrollTo({ element: '#second' });
	}

	function addProjects () {
		projectsToShow += 2;
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
	.projects {
		align-items: flex-start;
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		width: 100%;
	}

	.more {
    background-color: #FBF5F3;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    display: block;
    font-size: 20px;
    margin: 0 auto;
    outline: none;
    padding: 10px 15px;
    transition: 200ms background-color;
  }
  .more:hover {
    background-color: #E5DFDD;
  }
  .more:active {
    background-color: #CEC9C7;
  }
  .more + .more {
    margin-top: 10px;
  }

	@media screen and (min-width: 770px) {
		.projects {
			justify-content: space-between;
		}
	}
</style>

<svelte:head>
	<title>Nelson Pecora</title>
	<meta property="og:title" content="Nelson Pecora">
	<meta property="twitter:title" content="Nelson Pecora">
	<meta property="og:url" content="http://nelson.codes">
	<meta property="twitter:url" content="http://nelson.codes">
</svelte:head>

<Wrapper splash={true} theme="dark">
	<Header sticky={false} theme="dark" />
	<a class="intro" href="#second" on:click={scroll}>Hi, I'm Nelson and I architect Content Management Systems ↓</a>
</Wrapper>

<Wrapper>
	<div id="second">
		<Heading title="Cool Stuff I've Built" />
		<div class="projects">
			{#each filteredProjects as project, index (project.link)}
				<Project {project} />
			{/each}
		</div>
		{#if showMore}
			<button class="more" on:click={addProjects}>Earlier projects ↓</button>
		{/if}
	</div>
</Wrapper>
