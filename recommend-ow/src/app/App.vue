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

<style scoped>
.app-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.app-content {
    flex: 1;
    width: min(1200px, 100%);
    margin: 0 auto;
    padding: 1.5rem;
}

@media (max-width: 640px) {
    .app-content {
        padding: 1rem;
    }
}
</style>
