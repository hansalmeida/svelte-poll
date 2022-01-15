<script lang="ts">
  import { spring } from "svelte/motion"

  export let value: number = 0
  const valueSpring = spring(0)

  $: $valueSpring = Number(value) * 100
</script>

<div class="bar">
  <div class="progress" style="--value: {$valueSpring}%;">{$valueSpring.toFixed(0)}%</div>
</div>

<style lang="scss">
  .bar {
    background: rgb(150, 150, 150);

    .progress {
      width: var(--value);

      background: skyblue;
    }
  }
</style>
