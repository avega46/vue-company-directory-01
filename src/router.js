import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '@/components/MainPage.vue'
import LoginPage from '@/components/LoginPage.vue'
import NotFound from '@/components/NotFound.vue'


const routes = [
  { path: '/', name: 'Home', component: MainPage },
  { path: '/login', name : 'Login', component: LoginPage },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound}
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
///import HomePage from '@/views/HomePage.vue'

///const routes = [
///  { path: '/', name: 'Home', component: HomePage },
///  { path: '/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
///]

///const router = createRouter({
///  history: createWebHistory(),
///  routes,
///})

///export default router
