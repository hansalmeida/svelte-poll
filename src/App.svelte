<script lang="ts">
  import CreatePollForm from "./components/CreatePollForm.svelte"

  import Footer from "./components/Footer.svelte"
  import Header from "./components/Header.svelte"
  import PollList from "./components/PollList.svelte"
  import Tabs from "./shared/Tabs.svelte"

  // Tabs
  let tabs = ["Current Polls", "Add New Poll"]
  let activeTab = tabs[0]
  const handleTabChange = (event: CustomEvent) => (activeTab = event.detail)

  // Polls
  let polls = [
    {
      id: 1,
      question: "Python or TypeScript?",
      answer1: "Python",
      answer2: "TypeScript",
      votes1: 9,
      votes2: 15,
    },
  ]
  const handleNewPoll = (event: CustomEvent) => {
    const newPoll = event.detail
    polls = [...polls, newPoll]
    activeTab = tabs[0]
    console.log(polls)
  }
  const handleVote = (event: CustomEvent) => {
    const { id, option } = event.detail

    const copiedPolls = [...polls]
    let upvotedPoll = copiedPolls.find((poll) => poll.id === id)

    if (option === "1") upvotedPoll.votes1++
    if (option === "2") upvotedPoll.votes2++

    polls = copiedPolls
  }
</script>

<Header />
<main>
  <Tabs {tabs} {activeTab} on:tabChange={handleTabChange} />
  {#if activeTab === "Current Polls"}
    <PollList {polls} on:vote={handleVote} />
  {/if}
  {#if activeTab === "Add New Poll"}
    <CreatePollForm on:addNewPoll={handleNewPoll} />
  {/if}
</main>
<Footer />

<style lang="scss">
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
