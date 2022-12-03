<template>
  <div>
    <b-card
      header="질문 작성하기"
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
        v-model="contents"
        placeholder="내용을 입력해 주세요"
        rows="15"
        max-rows="6"
      ></b-form-textarea>
      <b-form-tags
        class="mt-2"
        input-id="tags-pills"
        v-model="tag"
        tag-variant="primary"
        tag-pills
        size="lg"
        separator=" "
        placeholder="해시태그를 입력해주세요"
        remove-on-delete
        duplicateTagText="중복된 입력입니다"
      ></b-form-tags>
      <b-button class="float-right mt-2" variant="info">등록</b-button>
      <b-button class="float-right mt-2 m-1" variant="outline-info"
        >취소</b-button
      >
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      contents: '',
      tag: [],
    };
  },
};
</script>

<style></style>
