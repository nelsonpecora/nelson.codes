<script>
	import { onMount } from 'svelte';
	import Icon from '../../node_modules/fa-svelte'; // https://github.com/alphapeter/fa-svelte/issues/5
  import { faArrowDown, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';

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
		align-items: center;
		bottom: 70px;
		display: flex;
		font-size: 24px;
		justify-content: center;
		position: absolute;
		text-align: center;
		width: 100%;
	}
	.intro-arrow-down {
		height: 24px;
		margin-left: 7px;
	}
	.projects {
		align-items: flex-start;
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		width: 100%;
	}

	.more {
		align-items: center;
    background-color: #FBF5F3;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    font-size: 22px;
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
	.arrow-down {
		height: 22px;
		margin-left: 5px;
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
	<meta property="og:url" content="https://nelson.codes">
	<meta property="twitter:url" content="https://nelson.codes">
</svelte:head>

<Wrapper splash={true} theme="dark">
	<Header sticky={false} theme="dark" />
	<a class="intro" href="#second" on:click={scroll}>Hi, I'm Nelson and I architect Content Management Systems <span class="intro-arrow-down"><Icon icon={faLongArrowAltDown} /></span></a>
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
			<button class="more" on:click={addProjects}>Earlier projects <span class="arrow-down"><Icon icon={faArrowDown} /></span></button>
		{/if}
	</div>
</Wrapper>
