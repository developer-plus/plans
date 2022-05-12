<script context="module" lang="ts">
  import type { Issue } from '../../api/model'
</script>

<script lang="ts">
  import Item from './ToDoItem.svelte'
  import { ISSUES_URL, http } from '../../api'
  import { issues } from './data'

  let issuesData: Issue[] = issues as unknown as Issue[]

  console.log({ issuesData })

  async function fetch() {
    const data = await http<Issue[]>(`${ISSUES_URL}?state=all`)
    console.log({ data })
  }
  // fetch()
</script>

<div class="w-full flex justify-center mt-4 flex-wrap gap-[20px]">
  {#each issuesData as issue}
    <Item {issue} />
  {/each}
</div>
