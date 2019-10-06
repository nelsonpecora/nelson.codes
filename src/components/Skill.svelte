<script>
  import Icon from '../../node_modules/fa-svelte'; // https://github.com/alphapeter/fa-svelte/issues/5

  export let category = {};

  let prevColor;

  function random () {
    const colors = [
      '#bbeaa6',
      '#e3c878',
      '#ed9a73',
      '#e688a1',
      '#c886e5',
      '#99d8d0',
      '#4baea0',
      '#f299ee',
      '#7189bf'
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    if (randomColor === prevColor) {
      return random(); // We just picked this color! pick another one
    } else {
      prevColor = randomColor;
      return randomColor;
    }
  }
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
    font-size: 60px; /* make icon big */
    line-height: 60px;
    margin-right: 10px;
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
      <Icon icon={category.icon()} />
    </div>
    <h3>{category.title}</h3>
  </div>

  <ul class="skills">
    {#each category.items as skill}
      <li class="skill" style={`border-color: ${random()};`}>{skill}</li>
    {/each}
  </ul>
</li>
