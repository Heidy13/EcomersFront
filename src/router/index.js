import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Product from '../views/Product.vue'
import ProductEdit from '../views/ProductEdit.vue'
import ProductDelete from '../views/ProductoDelete.vue'
import ProductView from '../views/ProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/createP',
    name: 'create',
    component: Product
  },
  {
    path: '/editP/:id',
    name: 'edit',
    component: ProductEdit
  },
  {
    path: '/deleteP/:id',
    name: 'delete',
    component: ProductDelete
  },
  {
    path: '/viewP',
    name: 'view',
    component: ProductView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
