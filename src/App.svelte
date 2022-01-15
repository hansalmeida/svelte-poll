<script lang="ts">
  import CreatePollForm from "./components/CreatePollForm.svelte"

  import Footer from "./components/Footer.svelte"
  import Header from "./components/Header.svelte"
  import Tabs from "./shared/Tabs.svelte"

  // tabs
  let tabs = ["Current Polls", "Add New Poll"]
  let activeTab = tabs[0]
  const handleTabChange = (event: CustomEvent) => (activeTab = event.detail)
</script>

<Header />
<main>
  <Tabs {tabs} {activeTab} on:tabChange={handleTabChange} />
  {#if activeTab === "Current Polls"}
    <h2>Current Pools</h2>
  {/if}
  {#if activeTab === "Add New Poll"}
    <CreatePollForm />
  {/if}
</main>
<Footer />

<style lang="scss">
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
