// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import * as VueGoogleMaps from "vue2-google-maps";
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDPyTL4j1YwgmnMwuYKTZYs8VUoz3xazsQ",
    libraries: "places" // necessary for places input
  }
})

