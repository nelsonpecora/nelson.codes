<script>
  import UAParser from 'ua-parser-js';
  import { stores } from '@sapper/app';
  import Icon from '../../node_modules/fa-svelte'; // https://github.com/alphapeter/fa-svelte/issues/5
  import {
    faFilePdf,
    faLaptop,
    faTv,
    faTabletAlt,
    faMobileAlt,
    faDesktop,
    faGamepad,
    faPrint,
    faCode,
    faProjectDiagram,
    faChartBar
  } from '@fortawesome/free-solid-svg-icons';
  import { faClock } from '@fortawesome/free-regular-svg-icons';
	import Wrapper from '../components/Wrapper.svelte';
	import Header from '../components/Header.svelte';
  import Heading from '../components/Heading.svelte';
  import Skill from '../components/Skill.svelte';
  import InteractiveResume from '../components/InteractiveResume.svelte';

  const { session } = stores();
  const parser = new UAParser($session['user-agent']);
  const skills = [{
    icon: () => {
      const { type } = parser.getDevice();

      // console, mobile, tablet, smarttv, wearable, embedded
      if (type === 'console') {
        return faGamepad;
      } else if (type === 'mobile') {
        return faMobileAlt;
      } else if (type === 'tablet') {
        return faTabletAlt;
      } else if (type === 'smarttv') {
        return faTv;
      } else if (type === 'wearable') {
        return faClock;
      } else {
        return [
          { class: 'laptop', icon: faLaptop },
          { class: 'desktop', icon: faDesktop },
          { class: 'print', icon: faPrint }
        ];
      }
    },
    title: 'Design & User Experience',
    items: [
      'Responsive Design',
      'Optimistic UI',
      'ReST API Design',
      'GraphQL API Design',
      'Information Architecture',
      'Data Visualization',
      'A11y Accessibility'
    ]
  }, {
    icon: () => faCode,
    title: 'Development',
    items: [
      'Vue',
      'React',
      'Svelte',
      'Sass',
      'CSS-In-JS',
      'Node.js',
      'Apollo',
      'Prisma',
      'Dgraph',
      'Technical Documentation'
    ]
  }, {
    icon: () => faProjectDiagram,
    title: 'Software Architecture',
    items: [
      'SPA Architecture',
      'CI/CD Workflows',
      'Open Source Library Design',
      'Large-Scale Modularity',
      'Data Modeling'
    ]
  }, {
    icon: () => faChartBar,
    title: 'Product Management',
    items: [
      'Agile Development',
      'Design Sprints',
      'Product Roadmapping',
      'GTM Strategy',
      'Holacracy'
    ]
  }]
</script>

<style>
  .bslg {
    margin: 0;
  }
  /* pdf download */
  .icon {
    align-items: center;
    background-color: #424B54;
    border-radius: 50%;
    color: #FBF5F3;
    display: flex;
    flex-flow: column nowrap;
    font-size: 100px; /* force the icon larger, then set the text smaller */
    height: 300px;
    justify-content: center;
    margin: 40px auto;
    padding: 30px;
    transition: 200ms background-color;
    width: 300px;
  }
  .icon:hover {
    background-color: #31373E;
  }
  .icon:active,
  .icon:focus {
    background-color: #24292E;
  }
  .icon-text {
    font-size: 20px;
  }
  .categories {
    margin: 0;
    padding: 0;
  }
</style>

<svelte:head>
	<title>Nelson Pecora</title>
</svelte:head>

<Header theme="dark" />
<Wrapper splash={true} theme="dark">
  <Heading title="“Brilliancy, Speed, Lightness, Glory”" />
	<p class="bslg">A mantra taken from Bruce Sterling’s <em>The Caryatids</em>, a dystopic novel about recovering from the climate crisis. To me, this represents everything I strive for as a developer.</p>

  <h3>Brilliancy</h3>
  <p class="bslg">Wit, lateral thinking, and epiphanies. The ability to solve an intractable problem with an ingenious solution</p>

  <h3>Speed</h3>
  <p class="bslg">Not just working quickly, but being able to break work down into iterable tasks. Slow is smooth, smooth is fast</p>

  <h3>Lightness</h3>
  <p class="bslg">Iteration, modular architecture, and legible code. If you can work on a project and hand it to another developer without them wanting to stab you, you’re doing it right</p>

  <h3>Glory</h3>
  <p class="bslg">The transcendent quality that separates the good from the amazing, the little touches that change the way we think about UIs, and the reason we describe some products as “magical and revolutionary”</p>
</Wrapper>

<Wrapper>
	<a class="icon" href="/resume.pdf" target="_blank">
    <Icon icon={faFilePdf} />
		<p class="icon-text">Download PDF Résumé</p>
	</a>
</Wrapper>

<Wrapper>
  <Heading title="Skills" />
  <ul class="categories">
    {#each skills as category}
      <Skill {category} />
    {/each}
  </ul>
</Wrapper>

<Wrapper>
  <Heading title="Experience" />
  <InteractiveResume />
</Wrapper>

<Wrapper>
  <Heading title="Interests" />
</Wrapper>
