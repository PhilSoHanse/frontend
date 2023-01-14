<template>
  <div>
    <b-card
      header="글 수정하기"
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
        v-model="hashtags"
        tag-variant="primary"
        tag-pills
        size="lg"
        separator=" "
        placeholder="해시태그를 입력해주세요"
        remove-on-delete
        duplicateTagText="중복된 입력입니다"
      ></b-form-tags>
      <b-button class="float-right mt-2" variant="info" @click="editArticle"
        >등록</b-button
      >
      <b-button class="float-right mt-2 m-1" variant="outline-info"
        >취소</b-button
      >
    </b-card>
  </div>
</template>

<script>
import { fetchDetail, edit } from '@/api/article/articles';
export default {
  data() {
    return {
      title: '',
      content: '',
      hashtags: [],
      type: '',
      id: '',
    };
  },
  methods: {
    async editArticle() {
      try {
        await edit(this.type, this.id, {
          title: this.title,
          content: this.content,
          hashtags: this.hashtags,
        });
        this.$router.push(`/community/${this.type}/${this.id}`);
      } catch (error) {
        console.log(error.response);
      }
    },
  },
  async created() {
    this.type = this.$router.history.current.params.type;
    this.id = this.$router.history.current.params.id;
    const { data } = await fetchDetail(this.type, this.id);
    this.title = data.title;
    this.content = data.content;
    this.hashtags = data.hashtags;
  },
};
</script>

<style></style>
