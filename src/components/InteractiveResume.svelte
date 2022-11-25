<script>
  import hashSum from 'hash-sum';
  import Icon from '../../node_modules/fa-svelte'; // https://github.com/alphapeter/fa-svelte/issues/5
  import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';

  import jobs from './jobs.json';
  import Job from './Job.svelte';
  import random from '../utils/colors';

  let jobsToShow = 2;
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

  function jobName (job) {
    if (!job) {
      return null;
    }

    return job.role + job.company;
  }
</script>

<style>
  .more {
    align-items: center;
    background-color: #FBF5F3;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
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
  .arrow {
		height: 18px;
		margin-left: 5px;
	}
</style>

{#each filteredJobs as job, index (`${job.start}-${job.end}`)}
  <Job color={random(jobName(job), jobName(filteredJobs[index - 1]))} {job} isFirstJob={index <= 2} />
  {#if job.subjobs}
    {#each filteredSubjobs[hashSum(job)] as subjob (`${subjob.start}-${subjob.end}`)}
      <Job color={random(jobName(job), jobName(filteredJobs[index - 1]))} job={subjob} />
    {/each}
    {#if showSubjobs(job, filteredSubjobs)}
      <button class="more" on:click={() => addSubjob(job)}>{job.showMore} <span class="arrow"><Icon icon={faArrowRight} /></span></button>
    {/if}
    {#if showMoreSubjobs(job, filteredSubjobs)}
      <button class="more" on:click={() => addSubjob(job)}>{job.showEvenMore} <span class="arrow"><Icon icon={faArrowRight} /></span></button>
    {/if}
  {/if}
{/each}
{#if showMoreJobs}
  <button class="more" on:click={addJob}>Before that <span class="arrow"><Icon icon={faArrowDown} /></span></button>
{/if}
