<template>
  <div id="app" class="mx-auto">
    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="전체" active @click="fetchAllData"></b-tab>
        <b-tab title="미해결" active @click="fetchDataByStatus(false)"></b-tab>
        <b-tab title="해결됨" active @click="fetchDataByStatus(true)"></b-tab>
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

    <b-button variant="primary float-right" size="sm">글쓰기</b-button>

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
import {
  fetchQuestionList,
  fetchQuestionListByStatus,
} from '@/api/article/questions';
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
          key: 'writerName',
          label: '작성자',
        },
        {
          key: 'writtenTime',
          label: '작성시간',
          formatter: time => {
            return dayjs(time).format('YYYY-MM-DD');
          },
        },
        {
          key: 'hashtag',
          label: '해시태그',
          // formatter: arr => {
          //   return arr.replace(/"/g, '');
          // },
        },
      ],
      perPage: 3,
      currentPage: 1,
      items: [],
    };
  },
  methods: {
    async fetchAllData() {
      const { data } = await fetchQuestionList();
      this.items = data;
    },
    async fetchDataByStatus(status) {
      const { data } = await fetchQuestionListByStatus(status);
      this.items = data;
    },
    rowClick(item) {
      this.$router.push({
        path: `/community/question/${item.id}`,
      });
    },
  },
  created() {
    this.fetchAllData();
  },
};
</script>
<style>
#app {
  margin: 20px;
}
</style>
