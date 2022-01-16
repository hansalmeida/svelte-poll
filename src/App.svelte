<script lang="ts">
  import CreatePollForm from "./components/CreatePollForm.svelte"

  import Footer from "./components/Footer.svelte"
  import Header from "./components/Header.svelte"
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
</script>

<Header />
<main>
  <Tabs {tabs} {activeTab} on:tabChange={handleTabChange} />
  {#if activeTab === "Current Polls"}
    <h2>Current Pools</h2>
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
