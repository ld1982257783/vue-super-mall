import Vue from 'vue'
import vue from 'vue'
import VueRouter from 'vue-router'

//安装插件 
Vue.use(VueRouter)

const Home = () => import('../views/home/Home.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Catrgory = () => import('../views/category/Category.vue')
const Detail = () => import('../views/detail/Detail.vue')

const routes = [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/cart',
        name: 'cart',
        component: Cart
      },
      {
        path: '/profile',
        name: 'profile',
        component: Profile
      },
      {
        path: '/category',
        name: 'category',
        component: Catrgory
      },
      {
        path: '/detail/:iid',
        name: 'Detail',
        component: Detail
      }
]

const router = new VueRouter({  
    routes,
    // 去除路径带#号
    mode: 'history',
    base: "/super-mall/"

})

export default router