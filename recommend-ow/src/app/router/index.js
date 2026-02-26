import { createRouter, createWebHistory } from 'vue-router';

import DashboardView from '@/features/shows/views/DashboardView.vue';
import ShowsDetailsView from '@/features/shows/views/ShowsDetailsView.vue';

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: DashboardView,
    },
    {
        path: '/show/:id',
        name: 'ShowDetails',
        component: ShowsDetailsView,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
