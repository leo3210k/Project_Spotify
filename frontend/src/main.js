import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
import router from './config/router' 

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

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
