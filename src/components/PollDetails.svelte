<script lang="ts">
  import { createEventDispatcher } from "svelte"
  import { tweened } from "svelte/motion"
  import Button from "../shared/Button.svelte"

  import Card from "../shared/Card.svelte"
  import { PollStore } from "../stores/PollStore"

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
  $: percentFirst = Math.floor((100 / totalVotes) * poll.votes1) || 0
  $: percentSecond = Math.floor((100 / totalVotes) * poll.votes2) || 0

  const tweenedPercentageFirst = tweened(0)
  const tweenedPercentageSecond = tweened(0)
  $: tweenedPercentageFirst.set(percentFirst)
  $: tweenedPercentageSecond.set(percentSecond)

  const handleVote = (option: string, id: number) => {
    PollStore.update((currentPolls) => {
      const copiedPolls = [...currentPolls]
      let upvotedPoll = copiedPolls.find((poll) => poll.id === id)

      if (option === "1") upvotedPoll.votes1++
      if (option === "2") upvotedPoll.votes2++

      return copiedPolls
    })
  }

  const handleDelete = (id: number) => {
    PollStore.update((currentPolls) => {
      return currentPolls.filter((poll) => poll.id !== id)
    })
  }
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>
    <p>Total votes: {totalVotes}</p>
    <div class="answer" on:click={() => handleVote("1", poll.id)}>
      <div class="percent percent-first" style="width: {$tweenedPercentageFirst}%" />
      <span>{poll.answer1} ({poll.votes1})</span>
    </div>
    <div class="answer" on:click={() => handleVote("2", poll.id)}>
      <div class="percent percent-second" style="width: {$tweenedPercentageSecond}%" />
      <span>{poll.answer2} ({poll.votes2})</span>
    </div>
  </div>

  <div class="delete">
    <Button flat on:click={() => handleDelete(poll.id)}>Delete</Button>
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
  .percent {
    position: absolute;

    height: 100%;

    &-first {
      border-left: 4px solid #d91b42;
      background: rgba(217, 27, 66, 0.2);
    }
    &-second {
      border-left: 4px solid #45c496;
      background: rgba(69, 196, 150, 0.2);
    }
  }
  .delete {
    margin-top: 30px;

    text-align: center;
  }
</style>
