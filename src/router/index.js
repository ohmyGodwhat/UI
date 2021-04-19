import Vue from 'vue'
import Router from 'vue-router'
import treeControl from '@/components/treeControl'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'treeControl',
      component: treeControl
    }
  ]
})
