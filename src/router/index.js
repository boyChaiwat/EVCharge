import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import GoogleMap from '@/components/GoogleMap'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Map',
      name: 'Map',
      component: GoogleMap
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
  ]
})


// router.beforeEach((to, form, next)=> {
// 	let currentUser = dbAuth.currentUser
// 	let requireAuth = to.matched.some(record => record.meta.requireAuth)

// 	if (requireAuth && !requireAuth) {
// 		next('/')
// 	} else if (!requireAuth && currentUser) {
// 		next('/')
// 	} else {
// 		next()
// 	}
// })

// let app
// dbAuth.onAuthStateChanged(function(user) {
// 	if (!app) {
// 		app = new Vue({
// 			el: '#app',
// 			router,
// 			render: h => h(App)
// 		})
// 	}
// })
