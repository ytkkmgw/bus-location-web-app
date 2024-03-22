import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Top',
        component: () => import('@/pages/TopPage.vue')
    },
    {
        path: '/result',
        name: 'Result',
        component: () => import('@/pages/ResultPage.vue')

    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
