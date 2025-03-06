import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProduitsView from '../views/Products/index.vue'
import ProduitsCreate from '../views/Products/Create.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/produits',
      name: 'produits',
      component: ProduitsView,
    },
    {
      path: '/produits/create',
      name: 'produitsCreate',
      component: ProduitsCreate,
    },
    // {
    //   path: '/produits/edit',
    //   name: 'produitsEdit',
    //   component: ProduitsEdit,
    // },
  ],
})

export default router
