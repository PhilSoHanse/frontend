import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';
import store from '@/store/index';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueCookies from 'vue-cookies';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueCookies, { expires: '1d' });

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
