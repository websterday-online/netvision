import Vue from 'vue'
import App from "@/App";
import {store} from "@/store/store";
import router from '@/router'
import {i18n} from '@/i18n'
import {Trans} from '@/plugins/Translation'

import '@/assets/css/common.scss'
import '@/assets/css/icons.scss'

Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')