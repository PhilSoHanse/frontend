<template>
  <div class="form-container">
    <question-add-form></question-add-form>
  </div>
</template>

<script>
import QuestionAddForm from '@/components/article/question/QuestionAddForm.vue';

export default {
  components: { QuestionAddForm },
  comments: {
    QuestionAddForm,
  },
};
</script>

<style></style>
