<script lang="ts">
  import PollDetails from "./PollDetails.svelte"

  type IPoll = {
    question: string
    answer1: string
    answer2: string
    votes1: number
    votes2: number
    id: number
  }
  export let polls: IPoll[] = []
</script>

<div class="poll-list">
  {#each polls as poll (poll.id)}
    <PollDetails {poll} on:vote />
  {/each}
</div>

<style lang="scss">
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
</style>
