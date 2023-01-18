<template>
  <div id="app" class="mx-auto">
    <div v-show="this.type !== 'playground'">
      <b-tabs content-class="mt-3">
        <b-tab title="전체" active @click="fetchAllData"></b-tab>
        <b-tab title="미해결" @click="fetchDataByStatus('incomplete')"></b-tab>
        <b-tab title="해결됨" @click="fetchDataByStatus('complete')"></b-tab>
      </b-tabs>
    </div>
    <div>
      <b-table
        id="my-table"
        striped
        hover
        :items="items"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        @row-clicked="rowClick"
        small
      >
      </b-table>
    </div>

    <b-button variant="primary float-right" size="sm" @click="routeAddForm"
      >글쓰기</b-button
    >

    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      size="sm"
      align="center"
      class="mt-4"
    >
    </b-pagination>
  </div>
</template>
<script>
import { fetchList, fetchListByStatus } from '@/api/article/articles';
import dayjs from 'dayjs';

export default {
  data() {
    return {
      fields: [
        {
          key: 'id',
          label: 'No',
        },
        {
          key: 'title',
          label: '제목',
        },
        {
          key: 'writerNickname',
          label: '작성자',
        },
        {
          key: 'writtenTime',
          label: '작성시간',
          formatter: time => {
            return dayjs(time).format('YYYY-MM-DD HH:mm');
          },
        },
        {
          key: 'hashtags',
          label: '해시태그',
        },
      ],
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
    rowClick(item) {
      this.$router.push({
        path: `/community/${this.type}/${item.id}`,
      });
    },
  },
  mounted() {
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
