<template>
  <div class="form-container">
    <question-edit-form></question-edit-form>
  </div>
</template>

<script>
import QuestionEditForm from '@/components/article/question/QuestionEditForm.vue';

export default {
  components: { QuestionEditForm },
  comments: {
    QuestionEditForm,
  },
};
</script>

<style></style>
