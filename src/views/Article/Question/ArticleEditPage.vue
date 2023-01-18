<template>
  <div class="form-container">
    <article-edit-form></article-edit-form>
  </div>
</template>

<script>
import ArticleEditForm from '@/components/article/ArticleEditForm.vue';

export default {
  components: { ArticleEditForm },
  comments: {
    ArticleEditForm,
  },
};
</script>

<style></style>
