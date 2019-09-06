import Vue from 'vue'
import Router from 'vue-router'
import AdminLayout from './views/layouts/AdminLayout'
import LoginPage from './views/pages/LoginPage'
import DashboardPage from './views/pages/DashboardPage'
import PenggunaPage from './views/pages/PenggunaPage'
import BlankPage from './views/pages/BlankPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'adminLayout',
      component: AdminLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboardPage',
          component: DashboardPage
        },
        {
          path: '/pengguna',
          name: 'penggunaPage',
          component: PenggunaPage
        },
        {
          path: '/blank',
          name: 'blankPage',
          component: BlankPage
        }
      ]
    },
    {
      path: '/login',
      name: 'loginPage',
      component: LoginPage
    }
  ]
})
