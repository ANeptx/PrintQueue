import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import vSelect from "vue-select"
import "vue-select/dist/vue-select.css";

// 3rd party plugins
import '@axios'
// Axios Mock Adapter
import '@/@fake-db/db'

// 3rd party plugins
import '@/libs/portal-vue'

import moment from 'moment'

// Plugins
import './plugins'

// vue filter
import '@/@core/utils/VueFilter'

// vue directive
import '@/@core/utils/VueDirective'

// global components
import '@/global-components'

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

// ==========================================
// ============ Date and time ===============
// ==========================================
moment.updateLocale('en', {
  // FIXME: move to the right place
  // Cusomize AM PM, am pm => A.M. P.M., a.m p.m.
  meridiem: function(hour, minute, isLowercase) {
    if (hour >= 12) return isLowercase ? 'p.m.' : 'P.M.'
    else return isLowercase ? 'a.m.' : 'A.M.'
  },
})


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
