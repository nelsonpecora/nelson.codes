<script>
  export let theme = 'light';
  export let splash = false;
  export let resume = false;
</script>

<style>
  .splash {
		align-items: center;
		display: flex;
		flex-flow: row wrap;
		height: calc(100vh - 90px);
		justify-content: center;
		position: relative;
	}
  .light {
    background-color: #FBF5F3;
    color: #0D1321;
  }
  .grey {
    background-color: #424B54;
    color: #FBF5F3;
  }
  .dark {
    background-color: #0D1321;
    color: #FBF5F3;
  }

  .inner {
    margin: 0 auto;
    max-width: 800px;
    padding: 20px;
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    .splash.resume {
      justify-content: space-between;
    }
  }
</style>

<div class={theme}>
  <section class="inner" class:splash class:resume>
    <slot />
  </section>
</div>
