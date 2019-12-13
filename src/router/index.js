import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRoter from './movie'
import mineRoter from './mine'
import cinemaRoter from './cinema'

Vue.use(VueRouter)

const routes = [
  movieRoter,
  mineRoter,
  cinemaRoter,
  {
    path: '/*',
    redirect: '/movie'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
