<script context="module" lang="ts">
  import type { Issue } from '../../api/model'
</script>

<script lang="ts">
  import Item from './ToDoItem.svelte'
  import { ISSUES_URL, http } from '../../api'
  // fake data only for dev
  // import { issues } from './data'

  let issuesData: Issue[] = []

  async function fetch() {
    const data = await http<Issue[]>(`${ISSUES_URL}?state=all&labels=ToDo`)
    issuesData = data
  }
  fetch()
</script>

<div class="w-full flex justify-center mt-4 flex-wrap gap-[20px]">
  {#each issuesData as issue}
    <Item {issue} />
  {/each}
</div>
