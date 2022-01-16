<script lang="ts">
  import { createEventDispatcher } from "svelte"

  import Card from "../shared/Card.svelte"

  const dispatch = createEventDispatcher()

  type IPoll = {
    question: string
    answer1: string
    answer2: string
    votes1: number
    votes2: number
    id: number
  }
  export let poll: IPoll

  $: totalVotes = poll.votes1 + poll.votes2

  const handleVote = (option: string, id: number) => {
    dispatch("vote", { option, id })
  }
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>
    <p>Total votes: {totalVotes}</p>
    <div class="answer" on:click={() => handleVote("1", poll.id)}>
      <div class="percent percent-first" />
      <span>{poll.answer1} ({poll.votes1})</span>
    </div>
    <div class="answer" on:click={() => handleVote("2", poll.id)}>
      <div class="percent percent-second" />
      <span>{poll.answer2} ({poll.votes2})</span>
    </div>
  </div>
</Card>

<style lang="scss">
  h3 {
    margin: 0 auto;

    color: #555;
  }
  p {
    margin-top: 6px;
    margin-bottom: 30px;

    color: #aaa;
    font-size: 14px;
  }
  .answer {
    position: relative;

    cursor: pointer;
    background: #fafafa;
    margin: 10px auto;

    &:hover {
      opacity: 0.6;
    }
  }
  span {
    display: inline-block;
    padding: 10px 20px;
  }
</style>
