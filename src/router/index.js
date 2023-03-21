import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogComponent from '../components/BlogComponent.vue'
import PostComponent from '../components/PostComponent.vue'
import UserPostComponent from '../components/UserPostComponent.vue'
import NotFoundComponent from '../components/NotFoundComponent.vue'
import OrderComponent from '../components/OrderComponent.vue'
import ProductComponent from '../components/ProductComponent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogComponent
  },
  {
    path: '/blog/:post',
    name: 'post',
    component: PostComponent
  },
  {
    path: '/user/:user/post/:post',
    name: 'user-post',
    component: UserPostComponent
  },
  {
    path: '/store/:orderId(\\d+)',
    name: 'order',
    component: OrderComponent
  },
  {
    path: '/store/:product',
    name: 'product',
    component: ProductComponent
  },
  {
    path: '/:pathMatch(.*)',
    name: 'not-found',
    component: NotFoundComponent
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
