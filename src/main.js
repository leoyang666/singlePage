// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import elementUI from "element-ui"
import "../static/css/elementui/theme/index.css"
import Home from "@/pages/Home"
import axios from 'axios'
import vueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(elementUI)
Vue.use(vueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    Home
  }
})
