<script>
  import { fade } from 'svelte/transition';

  export let project;

  let { title, desc, img, link } = project;
</script>

<style>
  .project {
    background-color: #E5DFDD;
    border-radius: 10px;
    flex: 0 1 100%;
    margin: 0 0 30px;
    transition: 200ms background-color;
  }

  .project:hover {
    background-color: #CEC9C7;
  }

  .bg {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 300px;
    width: 100%;
  }

  .info {
    padding: 0 10px 10px;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0 10px;
  }

  .desc {
    margin: 10px 0;
  }

  @media screen and (min-width: 770px) {
    .project {
      flex: 0 0 360px;
    }
  }
</style>

<a class="project" href={link} target="_blank" transition:fade>
  <div class="bg" style={`background-image: url(${img})`} />
  <div class="info">
    <p class="title">{title}</p>
    <p class="desc">{desc}</p>
  </div>
</a>
