<script>
  export let title = 'Section';
  export let anchor = null;
  export let center = false;
</script>

<style>
  .title {
    width: 100%;
    margin: 20px 0;
  }

  .center {
    text-align: center;
  }
</style>

<h2 id={anchor} class="title" class:center>{title}</h2>
