import { createRouter, createWebHistory } from 'vue-router'

const asyncRequire = (view: string) => async () => {
    const file = import(`@/views/User/${view}/${view}.vue`)
    try {
        await file
    } catch (e) {
        console.error('[router.js/asyncRequire]', e)
    }
    return file
}
const routes = [
    {
        path: '/',
        name: 'TablePage',
        component: asyncRequire('TablePage'),
    },
    {
        path: '/form',
        name: 'FormPage',
        component: asyncRequire('FormPage'),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
