import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import HelloEN from '@/components/HelloEN'
import NotFound from '@/components/Notfound'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, 
    {
      path: '/EN',
      name: 'HelloEN',
      component: HelloEN
    }, 
    { 
    path: '/404', 
    component: NotFound 
    },  
    { 
    path: '*', 
    redirect: '/404' }
  ],
  mode:'history'
})
