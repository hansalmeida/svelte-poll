<script lang="ts">
  export let isOpen = false
  export let isPromo = false
</script>

{#if isOpen}
  <div class="backdrop" class:promo={isPromo} on:click|self>
    <div class="modal">
      <slot />
    </div>
  </div>
{/if}

<style lang="scss">
  .backdrop {
    position: fixed;
    inset: 0;

    display: grid;
    place-items: center;

    width: 100%;
    height: 100%;

    background: rgba(0, 0, 0, 0.8);
  }

  .modal {
    width: 100%;
    height: fit-content;
    max-width: 400px;
    padding: 10px;

    background: white;
    border-radius: 10px;

    text-align: center;
  }

  .promo {
    .modal {
      background: crimson;

      color: white;
    }
  }
</style>
