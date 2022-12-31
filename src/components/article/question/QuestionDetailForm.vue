<template>
  <div>
    <b-card
      style="max-width: 50rem; margin: auto; margin-top: 10vh"
      class="mb-2"
      border-variant="info"
      align="left"
    >
      <div class="h5">{{ item.title }}</div>
      <div class="mt-3" rows="15" max-rows="6">{{ item.content }}</div>
      <div
        class="badge badge-pill badge-primary mt-4 mr-1"
        v-for="tag in item.hashtag"
        :key="tag"
      >
        #{{ tag }}
      </div>
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
import { fetchDetail } from '@/api/article/articles';
export default {
  data() {
    return {
      item: [],
      id: '',
    };
  },
  methods: {
    async fetchData() {
      const { data } = await fetchDetail(
        this.$route.params.type,
        this.$route.params.id,
      );
      console.log(this.id);
      this.item = data;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
