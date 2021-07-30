import Home from '../../views/home/index.vue'
import About from '../../views/about/index.vue'
import Category from '../../views/category/index.vue'
import Order from '../../views/order/index.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/category',
    name: 'category',
    component: Category,
    meta: {
      title: '菜单'
    }
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    meta: {
      title: '订单'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: '我的'
    }
  },
]

export default routes
