<script>
  import UAParser from 'ua-parser-js';
  import { stores } from '@sapper/app';
  import FaGamepad from 'svelte-icons/fa/FaGamepad.svelte';
  import FaMobileAlt from 'svelte-icons/fa/FaMobileAlt.svelte';
  import FaTabletAlt from 'svelte-icons/fa/FaTabletAlt.svelte';
  import FaTv from 'svelte-icons/fa/FaTv.svelte';
  import FaRegClock from 'svelte-icons/fa/FaRegClock.svelte';
  import FaLaptop from 'svelte-icons/fa/FaLaptop.svelte';
  import FaDesktop from 'svelte-icons/fa/FaDesktop.svelte';
  import FaPrint from 'svelte-icons/fa/FaPrint.svelte';
  import DiCode from 'svelte-icons/di/DiCode.svelte'
  import DiTerminal from 'svelte-icons/di/DiTerminal.svelte';
  import DiTrello from 'svelte-icons/di/DiTrello.svelte';
  import FaFilePdf from 'svelte-icons/fa/FaFilePdf.svelte';
	import Wrapper from '../components/Wrapper.svelte';
	import Header from '../components/Header.svelte';
  import Heading from '../components/Heading.svelte';
  import Skill from '../components/Skill.svelte';
  import InteractiveResume from '../components/InteractiveResume.svelte';
  import usfbd from '../../static/usfbd.svg';

  const { session } = stores();
  const parser = new UAParser($session['user-agent']);
  const skills = [{
    icon: () => DiTrello,
    title: 'Engineering Management',
    items: [
      'Agile Development',
      'SCRUM',
      'Kanban',
      'OKR Strategy',
      'Data-driven decision making',
      'Product Roadmapping',
      'Performance reviews',
      'Promotions',
      'Hiring & Onboarding',
      'Performance Calibration',
      'Goal-setting',
      'Career mentorship',
      'Cross-organizational alignment',
      'DACI',
      'SWOT Analysis',
      'OODA Loop'
    ]
  },{
    icon: () => DiTerminal,
    title: 'Software Architecture',
    items: [
      'Platform engineering',
      'GraphQL API design',
      'ReST API design',
      'Modular CMS Design',
      'Technical documentation',
      'Knowledge base maintenance',
      'Observability & monitoring',
      'Performance & Scaling optimization',
      'Security best practices',
      'Infrastructure as Code',
    ]
  }, {
    icon: () => DiCode,
    title: 'Programming',
    items: [
      'Vue',
      'React',
      'Svelte',
      'Sass',
      'CSS-In-JS',
      'Node.js',
      'Node CLI Tooling',
      'Apollo',
      'Dgraph',
      'Redis',
      'Prosemirror',
      'Test-Driven Development',
      'Socrates & Databricks',
      'Splunk',
      'Typescript',
      'Java',
      'Python',
      'Go',
      'Rust'
    ]
  }, {
    icon: () => {
      const { type } = parser.getDevice();

      // console, mobile, tablet, smarttv, wearable, embedded
      if (type === 'console') {
        return FaGamepad;
      } else if (type === 'mobile') {
        return FaMobileAlt;
      } else if (type === 'tablet') {
        return FaTabletAlt;
      } else if (type === 'smarttv') {
        return FaTv;
      } else if (type === 'wearable') {
        return FaRegClock;
      } else {
        return [
          { class: 'laptop', icon: FaLaptop },
          { class: 'desktop', icon: FaDesktop },
          { class: 'print', icon: FaPrint }
        ];
      }
    },
    title: 'Design & User Experience',
    items: [
      'Responsive Design',
      'Optimistic UI',
      'Information Architecture',
      'Design Sprints',
      'Data Visualization',
      'A11y & WCAG Accessibility',
      'Tutorial Design',
      'CLI Tooling UX',
      'Rich text interfaces'
    ]
  }]
</script>

<style>
  .bslg, .bslg-intro {
    flex: 0 0 100%;
    max-width: 600px;
    margin: 20px auto;
  }
  .bslg-hed, .bslg-txt, .bslg-intro {
    width: 100%;
    text-align: center;
  }
  /* pdf download */
  .pdf-button {
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
  .pdf-button:hover {
    background-color: #691614;
  }
  .pdf-button:active {
    background-color: #5F1413;
  }
  .pdf-icon {
    width: 100px;
    height: 100px;
  }
  .pdf-button-text {
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
    margin: 0 20px 50px;
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

  @media screen and (min-width: 1024px) {
		.bslg {
      flex: 0 0 50%;
      max-width: 320px;
      margin: 20px 0;
      justify-self: space-between;
    }
	}
</style>

<svelte:head>
	<title>Résumé | Nelson Pecora</title>
	<meta property="og:title" content="Résumé | Nelson Pecora">
	<meta property="twitter:title" content="Résumé | Nelson Pecora">
	<meta property="og:url" content="https://nelson.codes/resume">
	<meta property="twitter:url" content="https://nelson.codes/resume">
</svelte:head>

<Header theme="dark" />
<Wrapper splash={true} theme="dark" resume={true}>
  <Heading title="“Brilliancy, Speed, Lightness, Glory”" center={true}/>
  <p class="bslg-intro">A mantra taken from Bruce Sterling’s <em>The Caryatids</em>, a dystopic novel about recovering from the climate crisis. To me, this represents everything I strive for as a developer.</p>

  <section class="bslg">
    <h3 class="bslg-hed">Brilliancy</h3>
    <p class="bslg-txt">Wit, lateral thinking, and epiphanies. The ability to solve an intractable problem with an ingenious solution</p>
  </section>

  <section class="bslg">
    <h3 class="bslg-hed">Speed</h3>
    <p class="bslg">Not just working quickly, but being able to break work down into iterable tasks. Slow is smooth, smooth is fast</p>
  </section>

  <section class="bslg">
    <h3 class="bslg-hed">Lightness</h3>
    <p class="bslg">Iteration, modular architecture, and legible code. If you can work on a project and hand it to another developer without them wanting to stab you, you’re doing it right</p>
  </section>

  <section class="bslg">
    <h3 class="bslg-hed">Glory</h3>
    <p class="bslg-txt">The transcendent quality that separates the good from the amazing, the little touches that change the way we think about UIs, and the reason we describe some products as “magical and revolutionary”</p>
  </section>
  </Wrapper>

<Wrapper>
	<a class="pdf-button" href="/resume.pdf" target="_blank">
    <div class="pdf-icon">
      <FaFilePdf />
    </div>
		<p class="pdf-button-text">Download PDF Résumé</p>
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
    <a href="https://www.brooklynbattodo.com/" target="_blank" class="interest">
      <img class="interest-img" src="/zentokan.png" alt="Zentokan Dojo" />
      <span class="interest-title">I'm the Treasurer of Zentokan Dojo, as well as an assistant instructor. I hold the rank of yondan in <em>Zen Nihon Toyama Ryu Iaido Renmei</em> (全日本戸山流居合道連盟) and nidan in the <em>International Battodo Federation</em> (国際抜刀道連盟), two Japanese organizations that teach Toyama-Ryu and Nakamura-Ryu Battodo.</span>
    </a>
    <a href="https://www.usbattodo.com/" target="_blank" class="interest">
      <div class="interest-img">{@html usfbd}</div>
      <span class="interest-title">I am the Media and Membership Director and hold the rank of sandan in the U.S. Federation of Battodo (全米抜刀道連盟), an organization that brings together various schools of Japanese swordsmanship in the United States.</span>
    </a>
    <a href="http://prime.paxsite.com/what-is-pax" target="_blank" class="interest">
      <img class="interest-img" src="/pax.jpg" alt="Penny Arcade Expo" />
      <span class="interest-title">I'm a Deputy Manager for Virtual Reality at the Penny Arcade Expo. It's the largest fan-run video and board gaming convention in the United States.</span>
    </a>
    <a href="https://newplayexchange.org/plays/157480/parlor-tricks" target="_blank" class="interest">
      <img class="interest-img" src="/parlortricks.webp" alt="Parlor Tricks" />
      <span class="interest-title">I dramaturged and helped produce <em>Parlor Tricks</em>, an award-winning play about mediums and con-women in 1910s New York.</span>
    </a>
  </div>
</Wrapper>
