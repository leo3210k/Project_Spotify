import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
 
import router from './config/router' 

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
