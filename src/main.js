// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(vueSmoothScroll)


// Font Awesome import
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLandmark } from '@fortawesome/free-solid-svg-icons'
import { faMountain } from '@fortawesome/free-solid-svg-icons'
import { faTree } from '@fortawesome/free-solid-svg-icons'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
import { faBookReader } from '@fortawesome/free-solid-svg-icons'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import { faMosque } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



// Icon
library.add(faTree)
library.add(faLandmark)
library.add(faMountain)
library.add(faUtensils)
library.add(faUmbrellaBeach)
library.add(faBookReader)
library.add(faLeaf)
library.add(faAlignLeft)
library.add(faMosque)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
   App
 }
})
