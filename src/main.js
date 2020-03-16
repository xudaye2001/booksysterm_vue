import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from "iview";
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import Http from "./service/http";




import { findComponentDownload } from 'view-design/src/utils/assist';

import { on, off } from 'view-design/src/utils/dom';

Vue.use(iView);
Vue.use(ViewUI);

// 把Http挂载到Vue实例上
Vue.prototype.$Http = Http

Vue.config.devtools = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
