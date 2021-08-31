import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faCalendar,
  faHome,
  faFlag,
  faCalendarDay,
  faList,
  faPlusCircle,
  faListOl,
  faCheckCircle, faInfoCircle, faEdit
} from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faCalendar, faHome, faFlag, faCalendarDay, faList, faPlusCircle, faInfoCircle, faListOl, faCheckCircle, faEdit)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
