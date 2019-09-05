import Vue from 'vue'
import Router from 'vue-router'
import AdminLayout from './views/layouts/AdminLayout'
import LoginPage from './views/pages/LoginPage'
import DashboardPage from './views/pages/DashboardPage'

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
