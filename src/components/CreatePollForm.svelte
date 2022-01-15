<script lang="ts">
  import Button from "../shared/Button.svelte"

  const fields = {
    question: "",
    answer1: "",
    answer2: "",
  }

  const handleSubmit = () => {
    console.log(fields)
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-field">
    <label for="question">Poll question:</label>
    <input type="text" id="question" bind:value={fields.question} />
  </div>

  <div class="form-field">
    <label for="answer-1">Answer 1:</label>
    <input type="text" id="answer-1" bind:value={fields.answer1} />
  </div>

  <div class="form-field">
    <label for="answer-2">Answer 2:</label>
    <input type="text" id="answer-2" bind:value={fields.answer2} />
  </div>

  <Button type="secondary" fit>Add poll</Button>
</form>

<style lang="scss">
  form {
    display: grid;
    gap: 18px;
    justify-items: center;

    width: 400px;
    margin: 0 auto;

    text-align: center;
  }
  .form-field {
    width: 100%;
    label {
      margin: 10px auto;

      text-align: left;
    }
    input {
      width: 100%;

      border-radius: 6px;
    }
  }
</style>
