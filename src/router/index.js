import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Your One-Stop Shop For All Tech Things',
            component: HomeView
        },
        {
            path: '/builder',
            name: 'Builder',
            component: () => import('../views/BuilderView.vue')
        },
        {
            path: '/compare',
            name: 'Compare',
            component: () => import('../views/CompareView.vue')
        },
        {
            path: '/favorite',
            name: 'Favorite',
            component: () => import('../views/FavoriteView.vue')
        },
        {
            path: '/profile',
            name: 'Profile',
            component: () => import('../views/ProfileView.vue')
        },
    ]
})

router.beforeEach((to, from, next) => {
    const app = 'Technomance'
    document.title = `${app} — ${to.name}`
    next()
})

export default router
