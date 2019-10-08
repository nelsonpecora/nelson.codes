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
  import usfbd from '../../static/usfbd.svg';

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
    margin: 0 auto;
    max-width: 600px;
  }
  .bslg-hed {
    width: 100%;
    text-align: center;
  }
  /* pdf download */
  .icon {
    align-items: center;
    background-color: #731816;
    border-radius: 50%;
    color: #FBF5F3;
    display: flex;
    flex-flow: column nowrap;
    font-size: 100px; /* force the icon larger, then set the text smaller */
    height: 300px;
    justify-content: center;
    margin: 60px auto 40px;
    padding: 30px;
    transition: 200ms background-color;
    width: 300px;
  }
  .icon:hover {
    background-color: #691614;
  }
  .icon:active {
    background-color: #5F1413;
  }
  .icon-text {
    font-size: 20px;
  }
  .categories {
    margin: 0;
    padding: 0;
  }

  .interests {
    align-items: flex-start;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-bottom: 20px;
  }

  .interest {
    align-items: center;
    display: flex;
    flex: 1 0 300px;
    flex-flow: column nowrap;
    justify-content: center;
  }
  .interest + .interest {
    margin-left: 20px;
  }

  .interest-img {
    height: 150px;
    margin: 0 0 10px;
  }

  .interest-title {
    font-size: 20px;
    margin: 10px 0 0;
  }
</style>

<svelte:head>
	<title>Nelson Pecora</title>
</svelte:head>

<Header theme="dark" />
<Wrapper splash={true} theme="dark">
  <Heading title="“Brilliancy, Speed, Lightness, Glory”" />
	<p class="bslg">A mantra taken from Bruce Sterling’s <em>The Caryatids</em>, a dystopic novel about recovering from the climate crisis. To me, this represents everything I strive for as a developer.</p>

  <h3 class="bslg-hed">Brilliancy</h3>
  <p class="bslg">Wit, lateral thinking, and epiphanies. The ability to solve an intractable problem with an ingenious solution</p>

  <h3 class="bslg-hed">Speed</h3>
  <p class="bslg">Not just working quickly, but being able to break work down into iterable tasks. Slow is smooth, smooth is fast</p>

  <h3 class="bslg-hed">Lightness</h3>
  <p class="bslg">Iteration, modular architecture, and legible code. If you can work on a project and hand it to another developer without them wanting to stab you, you’re doing it right</p>

  <h3 class="bslg-hed">Glory</h3>
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
  <div class="interests">
    <div class="interest">
      <img class="interest-img" src="/pax.jpg" alt="Penny Arcade Expo" />
      <a href="http://prime.paxsite.com/what-is-pax" target="_blank" class="interest-title">I volunteer two times a year at the Penny Arcade Expo. It's the largest fan-run video- and board-gaming convention in the United States.</a>
    </div>
    <div class="interest">
      <div class="interest-img">{@html usfbd}</div>
      <a href="https://www.usbattodo.com/" target="_blank" class="interest-title">I am the Media Director of the U.S. Federation of Battodo, an organization that brings together schools of Japanese swordsmanship.</a>
    </div>
  </div>
</Wrapper>
