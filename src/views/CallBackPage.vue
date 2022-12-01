<template>
  <div>call back</div>
</template>

<script>
import { githubLogin } from '@/api/auth';

export default {
  mounted() {
    const code = this.$route.query.code;
    this.requestLogin({ code: code });
    this.$router.replace({ path: '/home' });
  },
  methods: {
    async requestLogin(map) {
      try {
        const response = await githubLogin(map);
        this.$cookies.set('til_access', response.headers['access-token']);
        this.$cookies.set('til_refresh', response.headers['refresh-token']);
        this.$cookies.set('til_profile', response.data.profileImageUrl);
        await this.$store.dispatch('LOGIN', response);
      } catch (error) {
        console.log(error.response);
      }
    },
  },
};
</script>

<style></style>
