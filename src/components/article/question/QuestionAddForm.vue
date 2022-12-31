<template>
  <div>
    <b-card
      header="글 작성하기"
      style="max-width: 50rem; margin: auto; margin-top: 10vh"
      class="mb-2"
      border-variant="info"
      align="left"
    >
      <b-form-input
        v-model="title"
        placeholder="제목을 입력해 주세요"
      ></b-form-input>
      <b-form-textarea
        class="mt-2"
        v-model="content"
        placeholder="내용을 입력해 주세요"
        rows="15"
        max-rows="6"
      ></b-form-textarea>
      <b-form-tags
        class="mt-2"
        input-id="tags-pills"
        v-model="hashtag"
        tag-variant="primary"
        tag-pills
        size="lg"
        separator=" "
        placeholder="해시태그를 입력해주세요"
        remove-on-delete
        duplicateTagText="중복된 입력입니다"
      ></b-form-tags>
      <b-button class="float-right mt-2" variant="info" @click="addQuestion"
        >등록</b-button
      >
      <b-button class="float-right mt-2 m-1" variant="outline-info"
        >취소</b-button
      >
    </b-card>
  </div>
</template>

<script>
import { create } from '@/api/article/articles';
export default {
  data() {
    return {
      title: '',
      content: '',
      hashtag: [],
    };
  },
  methods: {
    async addQuestion() {
      try {
        const response = await create(this.$route.params.type, {
          title: this.title,
          content: this.content,
          hashtag: this.hashtag,
        });
        this.$router.push('/home');
        console.log(response);
      } catch (error) {
        console.log(error.response.data);
        // console.log(error.response.data.message);
      }
    },
  },
};
</script>

<style></style>
