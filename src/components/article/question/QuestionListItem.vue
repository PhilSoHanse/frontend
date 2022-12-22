<template>
  <li>
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">{{ questionItem.title }}</h5>
        <p class="card-text">{{ questionItem.content.substr(50) }}</p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    questionItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
