<script lang="ts">
  export let type: "primary" | "secondary" = "primary"
  export let flat = false
  export let inverse = false
  export let fit = false
</script>

<button class={type} class:fit class:flat class:inverse on:click>
  <slot />
</button>

<style lang="scss">
  button {
    cursor: pointer;
    border: none;
    border-radius: 6px;
    padding: 8px 12px;

    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  }
  .primary {
    background: #d91b42;

    color: white;

    &.inverse {
      border: 2px solid #d91b42;
      background: white;

      color: #d91b42;
    }
  }
  .secondary {
    background: #45c496;

    color: white;

    &.inverse {
      border: 2px solid #45c496;
      background: white;

      color: #45c496;
    }
  }
  .fit {
    max-width: fit-content;
  }
  .flat {
    box-shadow: none;
  }
</style>
