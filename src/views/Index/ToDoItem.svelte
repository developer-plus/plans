<script context="module" lang="ts">
  import type { Issue } from '../../api/model'
</script>

<script lang="ts">
  export let issue: Issue = {} as Issue

  function goToIssuePage() {
    window.open(issue.html_url)
  }
</script>

<div
  class="
    w-[80%] rounded-[15px]
    bg-[#e5e5e5] cursor-pointer
    hover:translate-y--1 transition
    p-5 box-border
"
>
  <div class="font-bold text-2xl text-[#3c7199]" on:click={goToIssuePage}>
    {issue.title}
  </div>
</div>
