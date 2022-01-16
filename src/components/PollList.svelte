<script lang="ts">
  import { PollStore } from "../stores/PollStore"
  import PollDetails from "./PollDetails.svelte"

  // Alternative way to subscribe to a store if not using the $ syntax directly
  // export let polls = []
  // const unsubscribe = PollStore.subscribe((data) => (polls = data))
  // onDestroy(() => unsubscribe())
</script>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
    <PollDetails {poll} />
  {/each}
</div>

<style lang="scss">
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
</style>
