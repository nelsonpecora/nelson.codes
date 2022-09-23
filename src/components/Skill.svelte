<script>
  import random from '../utils/colors';
  export let category = {};

  $: icon = category.icon ? category.icon() : null
</script>

<style>
  .category {
    list-style: none;
    margin: 0 0 40px;
  }
  .category-info {
    align-items: center;
    display: flex;
    justify-content: flex-start;
  }
  .icon {
    height: 60px;
    margin-right: 10px;
    width: 60px;
  }

  .desktop,
  .print {
    display: none;
  }

  .laptop {
    display: block;
  }

  @media screen and (min-width: 2048px) {
    .desktop {
      display: block;
    }
    .laptop {
      display: none;
    }
  }

  @media print {
    .desktop,
    .laptop {
      display: none;
    }
    .print {
      display: block;
    }
  }

  .skills {
    align-items: flex-start;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
  }
  .skill {
    border: 2px solid #B7B3B1;
    border-radius: 10px;
    font-size: 20px;
    list-style: none;
    margin: 10px;
    padding: 10px 20px;
  }
</style>

<li class="category">
  <div class="category-info">
    <div class="icon">
      {#if Array.isArray(icon)}
        {#each icon as i}
          <div class={i.class}>
            <svelte:component this={i.icon} />
          </div>
        {/each}
      {:else}
        <svelte:component this={icon} />
      {/if}
    </div>
    <h3>{category.title}</h3>
  </div>

  <ul class="skills">
    {#each category.items as skill, i}
      <li class="skill" style={`border-color: ${random(skill, category.items[i - 1])};`}>{skill}</li>
    {/each}
  </ul>
</li>
