import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: () => import('@/views/MainPage.vue'),
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/login/github/callback',
      component: () => import('@/views/CallBackPage.vue'),
    },
    {
      path: '/community/:type',
      component: () => import('@/views/Article/Question/QuestionListPage.vue'),
    },
    {
      path: '/community/:type/add',
      component: () => import('@/views/Article/Question/QuestionAddPage.vue'),
    },
    {
      path: '/community/:type/:id',
      component: () =>
        import('@/views/Article/Question/QuestionDetailPage.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
