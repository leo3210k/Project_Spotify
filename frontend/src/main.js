import Vue from 'vue'
import vuetify from './plugins/vuetify';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import './config/axios'
import './config/msgs'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
 
import router from './config/router' 

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

// tooltip
// tables
// progress
// navigation drawers or lists
// menus
// images
// icons
// hover
// forms
// footers
// button
// badges
