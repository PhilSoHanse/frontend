<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand @click="routeCommunityPage('playground')"
        >Noriter</b-navbar-brand
      >
      <b-navbar-nav>
        <b-dropdown
          size="lg"
          id="community"
          text="커뮤니티"
          class="m-md-2"
          variant="info"
        >
          <b-dropdown-item @click="routeCommunityPage('playground')"
            >자유 게시판</b-dropdown-item
          >
          <b-dropdown-item @click="routeCommunityPage('question')"
            >질문 게시판</b-dropdown-item
          >
          <b-dropdown-item @click="routeCommunityPage('gathering')"
            >스터디 게시판</b-dropdown-item
          >
        </b-dropdown>
      </b-navbar-nav>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
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
              to="/login"
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
            >
              로그인
            </b-button>
            <b-nav-item-dropdown right v-else>
              <template #button-content>
                <b-avatar
                  variant="info"
                  :src="$store.state.profileImageUrl"
                ></b-avatar>
              </template>
              <b-dropdown-item @click="logout">로그아웃</b-dropdown-item>
            </b-nav-item-dropdown>
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
  methods: {
    routeCommunityPage(type) {
      this.$router.push(`/community/${type}`);
    },
    logout() {
      this.$cookies.remove('til_access');
      this.$cookies.remove('til_refresh');
      this.$cookies.remove('til_profile');
      this.$store.dispatch('LOGOUT');
      this.$router.go();
    },
  },
};
</script>

<style scoped>
.btn-space {
  margin-right: 5px;
}
</style>
