import Vue from 'vue'
import Router from 'vue-router'
import ActiveCompetition from "./views/Active_competition.vue"
import ErrorPage from "./views/Error.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/active',
      name:'active',
      component:ActiveCompetition
    },
    {
      path:'/*',
      name:'error',
      component:ErrorPage
    }
  ]
})
