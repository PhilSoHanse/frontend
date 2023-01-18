<template>
  <div id="app" class="mx-auto">
    <div style="max-width: 50rem; margin: auto; margin-top: 10vh">
      <div v-show="this.type !== 'playground'">
        <b-tabs content-class="mt-3">
          <b-tab title="전체" active @click="fetchAllData"></b-tab>
          <b-tab
            title="미해결"
            @click="fetchDataByStatus('incomplete')"
          ></b-tab>
          <b-tab title="해결됨" @click="fetchDataByStatus('complete')"></b-tab>
        </b-tabs>
      </div>
      <ul>
        <ArticleListItem
          v-for="item in items.slice().reverse()"
          :key="item.id"
          :item="item"
        >
        </ArticleListItem>
      </ul>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        size="sm"
        align="center"
        class="mt-4"
      >
      </b-pagination>
      <b-button variant="primary float-right" size="sm" @click="routeAddForm"
        >글쓰기</b-button
      >
    </div>
  </div>
</template>
<script>
import { fetchList, fetchListByStatus } from '@/api/article/articles';
import ArticleListItem from '@/components/article/ArticleListItem.vue';

export default {
  components: {
    ArticleListItem,
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      type: '',
      items: [],
      showTabs: '',
    };
  },
  methods: {
    async fetchAllData() {
      const { data } = await fetchList(this.type);
      this.items = data;
    },
    async fetchDataByStatus(status) {
      const { data } = await fetchListByStatus(this.type, status);
      this.items = data;
    },
    routeAddForm() {
      this.$router.push(`/community/${this.type}/add`);
    },
  },
  created() {
    this.type = this.$route.params.type;
    console.log(this.type);
    this.fetchAllData();
  },
};
</script>
<style>
#app {
  margin: 20px;
}
</style>
