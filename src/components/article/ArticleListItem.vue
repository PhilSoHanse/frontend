<template>
  <div class="mt-1" @click="rowClick">
    <b-card :title="item.title">
      <b-card-text>
        {{ item.content }}
      </b-card-text>
      <div
        class="badge badge-pill badge-primary mt-0 mr-1"
        v-for="tag in item.hashtags"
        :key="tag"
      >
        #{{ tag }}
      </div>
      <div>
        <small class="text-muted">{{ item.writerNickname }}</small>
        <small class="text-muted">
          {{ item.writtenTime }}
        </small>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    rowClick() {
      this.$router.push({
        path: `/community/${this.$route.params.type}/${this.item.id}`,
      });
    },
  },
};
</script>

<style></style>
