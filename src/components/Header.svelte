<script>
  import { onMount } from 'svelte';
  import largeLogo from '../../static/logo-large.svg';
  import smallLogo from '../../static/logo-small.svg';

  export let sticky = true;
  export let theme = 'light';

  let animateScroll;

  onMount(async () => {
    animateScroll = await import('svelte-scrollto');
  })

  function scroll () {
    animateScroll.scrollTo({ element: '#contact' });
  }
</script>

<style>
  nav {
    font-family: var(--heading-font);
    padding: 20px 0;
    width: 100%;
  }
  .inner {
    align-items: center;
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  /* themes */
  .light {
    background-color: #FBF5F3;
    color: #0D1321;
  }
  .dark {
    background-color: #0D1321;
    color: #FBF5F3;
  }

  /* logos */
  .small {
    display: block;
    width: 100px;
  }
  .large {
    display: none;
    width: 250px;
  }
  .link {
    font-size: 30px;
  }
  /* splash header displays on the homepage */
  .splash .inner {
    flex-flow: column nowrap;
  }
  .splash .link {
    margin: 20px;
  }
  .splash .small {
    display: none !important;
  }
  .splash .large {
    display: block !important;
    order: -1;
  }

  /* sticky header stays at the top of the screen */
  .sticky {
    box-shadow: 0px 0px 5px 2px rgba(10,14,25,0.7);
    position: sticky;
    top: 0;
    z-index: 1;
  }
  .sticky .inner {
    flex-flow: row nowrap;
    margin: 0 auto;
    max-width: 800px;
  }
  .sticky .small {
    height: 50px;
  }
  .sticky .large {
    height: 100px;
  }
  .sticky .link {
    font-size: 20px;
  }

  @media screen and (min-width: 768px) {
    .small {
      display: none;
    }
    .large {
      display: block;
    }
    .splash .inner {
      flex-flow: row nowrap;
    }
    .splash .large {
      order: 0;
    }
  }

  @media print {
    .sticky {
      display: none;
    }
  }
</style>

<nav class:sticky class:splash={!sticky} class={theme}>
  <div class="inner">
    <a href="/resume" class="link">RÉSUMÉ</a>
    <a href="/" class="small">{@html smallLogo}</a>
    <a href="/" class="large">{@html largeLogo}</a>
    <a href="#contact" class="link" on:click|preventDefault={scroll}>CONTACT</a>
  </div>
</nav>
