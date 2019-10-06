<script>
  export let style = 'light';
</script>

<style>
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
</style>

<div class={style}>
  <section class="inner">
    <slot />
  </section>
</div>
