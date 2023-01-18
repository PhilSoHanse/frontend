<template>
  <div class="form-container">
    <article-add-form></article-add-form>
  </div>
</template>

<script>
import ArticleAddForm from '@/components/article/ArticleAddForm.vue';

export default {
  components: { ArticleAddForm },
  comments: {
    ArticleAddForm,
  },
};
</script>

<style></style>
