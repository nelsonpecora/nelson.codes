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
    font-family: 'Vast Shadow', cursive;
    padding: 20px 0;
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
    width: 300px;
  }

  /* sticky header stays at the top of the screen */
  .sticky {
    box-shadow: 0px 0px 5px 2px rgba(10,14,25,0.7);
    position: sticky;
    top: 0;
    z-index: 1;
  }
  .sticky .inner {
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 800px;
    width: 100%;
  }
  .sticky .small {
    height: 50px;
  }
  .sticky .large {
    height: 100px;
  }

  @media screen and (min-width: 768px) {
    .small {
      display: none;
    }
    .large {
      display: block;
    }
  }

  @media print {
    .sticky {
      display: none;
    }
  }
</style>

<nav class:sticky class={theme}>
  <div class="inner">
    <a href="/resume">RÉSUMÉ</a>
    <div class="small">{@html smallLogo}</div>
    <div class="large">{@html largeLogo}</div>
    <a href="#contact" on:click={scroll}>CONTACT</a>
  </div>
</nav>
