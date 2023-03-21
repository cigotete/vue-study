import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogComponent from '../components/BlogComponent.vue'
import PostComponent from '../components/PostComponent.vue'
import UserPostComponent from '../components/UserPostComponent.vue'
import NotFoundComponent from '../components/NotFoundComponent.vue'
import OrderComponent from '../components/OrderComponent.vue'
import ProductComponent from '../components/ProductComponent.vue'
import UsersComponent from '../components/UsersComponent.vue'
import ProfileComponent from '../components/users/ProfileComponent.vue'
import CourseComponent from '../components/users/CourseComponent.vue'
import UserIndexComponent from '../components/users/UserIndexComponent.vue'
import StoreComponent from '../components/StoreComponent.vue'

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
    redirect: { name: 'blog' }
  },
  {
    path: '/posts',
    name: 'blog',
    component: BlogComponent
  },
  {
    path: '/posts/:post',
    name: 'post',
    component: PostComponent
  },
  {
    path: '/store',
    name: 'store',
    component: StoreComponent
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
    path: '/user/:user/post/:post',
    name: 'user-post',
    component: UserPostComponent
  },
  {
    path: '/users/:userId(\\d+)?',
    name: 'users-list',
    component: UsersComponent,
    props: true,
    children: [
      {
        path: '',
        name: 'user-index',
        component: UserIndexComponent
      },
      {
        path: 'profile',
        name: 'profile',
        component: ProfileComponent
      },
      {
        path: 'courses',
        name: 'courses',
        component: CourseComponent
      }
    ]
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
