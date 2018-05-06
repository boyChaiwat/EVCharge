// File name routes.js

import Home from '@/components/Home'
import Login from '@/components/Login'

export const routes = [
    { path:'/login', component: Login, name: 'login' },
    // { path:'/signup', component: Register, name:'register'},
	{ path:'/', component: Home, name: 'home', meta: { requireAuth: true } },
    // // {path:'/about', component: About, name: 'about'},
    // { path:'/create', component: Create, name: 'create', meta: { requireAuth: true } },
    // { path:'/edit/:key', component: Edit, name: 'edit', meta: { requireAuth: true } },
]