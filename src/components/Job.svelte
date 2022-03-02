<script>
  import { slide, scale } from 'svelte/transition';
  import Icon from '../../node_modules/fa-svelte'; // https://github.com/alphapeter/fa-svelte/issues/5
  import { faAt } from '@fortawesome/free-solid-svg-icons';

  export let color;
  export let job;
  export let isFirstJob = false;

  const { start, end, place, role, company, desc } = job;

  let isCircleShown = isFirstJob || false;

  function showCircle () {
    // Don't display the circles until the item has finished its animation,
    // since they get cut off while animating
    isCircleShown = true;
  }
</script>

<style>
  .job {
    border-left: 8px solid grey;
    padding-bottom: 20px;
    padding-left: 20px;
    position: relative;
  }
  .circle {
    border-radius: 50%;
    height: 30px;
    left: -19px;
    position: absolute;
    top: -1px;
    width: 30px;
  }
  .title {
    align-items: center;
    display: flex;
    font-size: 20px;
    justify-content: flex-start;
    line-height: 20px;
    margin: 0;
  }
  .icon {
    font-size: 30px;
    margin: 0 5px;
  }
  .subtitle {
    color: #838586;
    font-size: 14px;
    margin: 0;
  }
  .desc {
    margin: 10px 0 0;
  }
</style>

<div class="job" style={`border-color: ${color};`} transition:slide on:introend={showCircle}>
  {#if isCircleShown}
    <div class="circle" style={`background-color: ${color};`} transition:scale />
  {/if}
  <p class="title">
    {role}
    {#if company}
      <span class="icon" style={`color: ${color};`}>
        <Icon icon={faAt} />
      </span>
      {company}
    {/if}
  </p>
  <p class="subtitle">{place} · <em>{start} – {end}</em></p>
  <p class="desc">{desc}</p>
</div>
