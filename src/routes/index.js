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
      component: () => import('@/views/Article/ArticleListPage.vue'),
    },
    {
      path: '/community/:type/add',
      component: () => import('@/views/Article/Question/ArticleAddPage.vue'),
    },
    {
      path: '/community/:type/:id',
      component: () => import('@/views/Article/Question/ArticleDetailPage.vue'),
    },
    {
      path: '/community/:type/:id/edit',
      component: () => import('@/views/Article/Question/ArticleEditPage.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
