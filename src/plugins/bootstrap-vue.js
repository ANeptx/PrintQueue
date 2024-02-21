import Vue from 'vue'

import { BootstrapVue, IconsPlugin, ToastPlugin, ModalPlugin } from 'bootstrap-vue'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Tost plugin
Vue.use(ToastPlugin)


Vue.use(ModalPlugin)
