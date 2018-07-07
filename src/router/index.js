import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/pages/login/login'
import first from '@/pages/store/first'
import addgoods from '@/pages/store/good/addgoods'
import goodsdetail from '@/pages/store/good/goodsdetail'
import shopfooter from '@/components/footer/shopfooter'
import clearinggoods from '@/pages/store/good/clearinggoods'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: first
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/hello',
      component: HelloWorld
    },
    {path: '/addgoods', component: addgoods},
    {path: '/goodsdetail', component: goodsdetail},
    {path: '/clearinggoods', component: clearinggoods},
    {path: '/shopfooter', component: shopfooter}

  ]
})
