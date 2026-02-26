import { createRouter, createWebHistory } from 'vue-router';

import DashboardView from '@/features/shows/views/DashboardView.vue';
import ShowDetailsView from '@/features/shows/views/ShowDetailsView.vue';

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: DashboardView,
    },
    {
        path: '/shows/:id',
        name: 'ShowDetails',
        component: ShowDetailsView,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
