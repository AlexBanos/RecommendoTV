<template>
    <div class="app-layout">
        <AppHeader />

        <main class="app-content">
            <RouterView />
        </main>

        <!-- Add footer -->
    </div>
</template>

<script setup>
import AppHeader from '@/shared/components/AppHeader.vue';
// import footer
</script>

<style scoped>
</style>
