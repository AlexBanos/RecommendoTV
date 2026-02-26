<template>
    <div class="app-layout">
        <AppHeader />

        <main class="app-content">
            <RouterView />
        </main>

        <AppFooter />
    </div>
</template>

<script setup>
import AppHeader from '@/shared/components/AppHeader.vue';
import AppFooter from '@/shared/components/AppFooter.vue';
</script>

<style scoped></style>
