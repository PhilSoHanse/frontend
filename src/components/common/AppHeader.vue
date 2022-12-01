<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Noriter</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0 btn-space" type="submit">
              Search
            </b-button>
          </b-nav-form>
          <b-nav-form>
            <b-button
              v-if="!isUserLogin"
              to="login"
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
            >
              로그인
            </b-button>
            <b-avatar
              v-else
              variant="info"
              :src="$store.state.profileImageUrl"
            ></b-avatar>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
  },
};
</script>

<style scoped>
.btn-space {
  margin-right: 5px;
}
</style>
