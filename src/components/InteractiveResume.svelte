<script>
  import jobs from './jobs.json';
  import Job from './Job.svelte';

  let prevColor;
  let companyColors = {};

  function random (company) {
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

    if (companyColors[company]) {
      return companyColors[company];
    }

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    if (randomColor === prevColor) {
      return random(company); // We just picked this color! pick another one
    } else {
      prevColor = randomColor;
      companyColors[company] = randomColor;
      return randomColor;
    }
  }
</script>

{#each jobs as job (job.company)}
  <Job color={random(job.company)} {job} />
  {#if job.subjobs}
    {#each job.subjobs as subjob (subjob.company)}
      <Job color={random(subjob.company)} job={subjob} />
    {/each}
  {/if}
{/each}
