<script lang="ts">
  import Button from "../shared/Button.svelte"

  const fields = {
    question: "",
    answer1: "",
    answer2: "",
  }
  const errors = {
    question: "",
    answer1: "",
    answer2: "",
  }
  let valid = false

  const handleSubmit = () => {
    valid = true

    if (fields.question.trim().length < 5) {
      valid = false
      errors.question = "Question must have a minimum length of 5"
    } else {
      errors.question = ""
    }

    if (fields.answer1.trim().length < 1) {
      valid = false
      errors.answer1 = "First answer cannot be empty"
    } else {
      errors.answer1 = ""
    }

    if (fields.answer2.trim().length < 1) {
      valid = false
      errors.answer2 = "Second answer cannot be empty"
    } else {
      errors.answer2 = ""
    }

    if (valid) {
      console.log("valid", fields)
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-field">
    <label for="question">Poll question:</label>
    <input type="text" id="question" bind:value={fields.question} />
    <div class="error">{errors.question}</div>
  </div>

  <div class="form-field">
    <label for="answer-1">Answer 1:</label>
    <input type="text" id="answer-1" bind:value={fields.answer1} />
    <div class="error">{errors.answer1}</div>
  </div>

  <div class="form-field">
    <label for="answer-2">Answer 2:</label>
    <input type="text" id="answer-2" bind:value={fields.answer2} />
    <div class="error">{errors.answer2}</div>
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
  .error {
    color: #d91b42;
    font-weight: bold;
    font-size: 12px;
  }
</style>
