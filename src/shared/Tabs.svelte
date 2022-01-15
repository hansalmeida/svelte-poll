<script lang="ts">
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()
  const handleTabClick = (tab: string) => dispatch("tabChange", tab)

  export let tabs: string[]
  export let activeTab: string
</script>

<div class="tabs">
  <ul>
    {#each tabs as tab}
      <li on:click={() => handleTabClick(tab)}>
        <div class:active={tab === activeTab}>
          {tab}
        </div>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .tabs {
    margin-bottom: 40px;

    ul {
      display: flex;
      justify-content: center;
      gap: 16px;

      cursor: pointer;
      padding: 0;

      list-style-type: none;
      font-size: 18px;
      color: #555;
    }
  }
  .active {
    padding-bottom: 8px;

    border-bottom: 2px solid #d91b42;

    color: #d91b42;
  }
</style>
