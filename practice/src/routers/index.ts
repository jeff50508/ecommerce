import { createRouter, createWebHashHistory, createWebHistory, Router, RouteRecordRaw } from "vue-router";
import Checkout from '../views/layout/Checkout.vue'
import Index from '../views/layout/Index.vue'
import Products from '../views/layout/Products.vue'
// 1. 定义路由组件.
// 也可以从其他文件导入
// const Checkout = { template: '<div>Checkout</div>' }
// const Index = { template: '<div>Index</div>' }
// const Products = { template: '<div>Products</div>' }

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    // { path: '/', component: App },
    { path: '/home', component: Index },
    { path: '/Checkout', component: Checkout },
    { path: '/products', component: Products },
  //   { path: '/index', component: Index },
  //   { path: '/products', component: Products },
  ];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})
export default router;
