<script>
  import hashSum from 'hash-sum';
  import jobs from './jobs.json';
  import Job from './Job.svelte';

  let prevColor;
  let companyColors = {};
  let jobsToShow = 1;
  let subjobsToShow = {
    ...jobs.reduce((acc, job) => job.subjobs ? { ...acc, [hashSum(job)]: 0 } : acc, {})
  }

  $: filteredJobs = jobs.slice(0, jobsToShow);
  $: filteredSubjobs = {
    ...jobs.reduce((acc, job) => job.subjobs ? { ...acc, [hashSum(job)]: job.subjobs.slice(0, subjobsToShow[hashSum(job)]) } : acc, {})
  }
  $: showMoreJobs = filteredJobs.length !== jobs.length;

  function showSubjobs (job) {
    const hash = hashSum(job);

    return !!job.subjobs && subjobsToShow[hash] === 0;
  }

  function showMoreSubjobs (job) {
    const hash = hashSum(job);

    return !!job.subjobs
      && filteredSubjobs[hash].length > 0
      && filteredSubjobs[hash].length !== job.subjobs.length;
  }

  function addJob () {
    jobsToShow += 1;
  }

  function addSubjob (job) {
    const hash = hashSum(job);

    subjobsToShow[hash] += 1;
  }

  function random (job) {
    const hash = hashSum(job);
    const colors = [
      '#bbeaa6',
      '#e3c878',
      '#ed9a73',
      '#e688a1',
      '#c886e5',
      '#99d8d0',
      '#4baea0',
      '#f299ee',
      '#7189bf',
      '#a7d1ea',
      '#aba7ea',
      '#c6a7ea',
      '#eaa7e8',
      '#eaa7b8',
      '#afeaa7'
    ];

    if (companyColors[hash]) {
      return companyColors[hash];
    }

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    if (randomColor === prevColor) {
      return random(hash); // We just picked this color! pick another one
    } else {
      prevColor = randomColor;
      companyColors[hash] = randomColor;
      return randomColor;
    }
  }
</script>

<style>
  .more {
    background-color: #FBF5F3;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    display: block;
    font-size: 18px;
    margin-bottom: 10px;
    margin-left: 20px;
    outline: none;
    padding: 6px 12px;
    transition: 200ms background-color;
  }
  .more:hover {
    background-color: #E5DFDD;
  }
  .more:active {
    background-color: #CEC9C7;
  }
  .more + .more {
    margin-top: 10px;
  }
</style>

{#each filteredJobs as job, index (`${job.start}-${job.end}`)}
  <Job color={random(job)} {job} isFirstJob={index === 0} />
  {#if job.subjobs}
    {#each filteredSubjobs[hashSum(job)] as subjob (`${subjob.start}-${subjob.end}`)}
      <Job color={random(subjob)} job={subjob} />
    {/each}
    {#if showSubjobs(job, filteredSubjobs)}
      <button class="more" on:click={() => addSubjob(job)}>I worked with →</button>
    {/if}
    {#if showMoreSubjobs(job, filteredSubjobs)}
      <button class="more" on:click={() => addSubjob(job)}>I also worked with →</button>
    {/if}
  {/if}
{/each}
{#if showMoreJobs}
  <button class="more" on:click={addJob}>Before that ↓</button>
{/if}
