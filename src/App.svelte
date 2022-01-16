<script lang="ts">
  import CreatePollForm from "./components/CreatePollForm.svelte"

  import Footer from "./components/Footer.svelte"
  import Header from "./components/Header.svelte"
  import PollList from "./components/PollList.svelte"
  import Tabs from "./shared/Tabs.svelte"
  import { PollStore } from "./stores/PollStore"

  // Tabs
  let tabs = ["Current Polls", "Add New Poll"]
  let activeTab = tabs[0]
  const handleTabChange = (event: CustomEvent) => (activeTab = event.detail)

  // Polls
  const handleNewPoll = () => {
    activeTab = tabs[0]
  }
</script>

<Header />
<main>
  <Tabs {tabs} {activeTab} on:tabChange={handleTabChange} />
  {#if activeTab === "Current Polls"}
    <PollList />
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
