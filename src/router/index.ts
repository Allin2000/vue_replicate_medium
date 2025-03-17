// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView,
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue'),
//     },
//   ],
// })

// export default router


import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../layouts/Default.vue'; // 导入默认布局
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Profile from '../views/Profile.vue';
import Settings from '../views/Settings.vue';
import Create_edit from '../views/Create_edit.vue';
import Article from '../views/Article.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout, // 使用默认布局作为父组件
    children: [
      { path: '', name: 'home', component: Home },
      { path: 'login', name: 'login', component: Login },
      { path: 'register', name: 'register', component: Register },
      { path: 'profile', name: 'profile', component: Profile },
      { path: 'settings', name: 'settings', component: Settings },
      { path: 'editor', name: 'editor', component: Create_edit }, // 注意：修正了路径名称
      { path: 'article', name: 'article', component: Article },
    ]
  },
  // 可以添加不使用默认布局的路由
  // { path: '/some-path', component: SomeComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
