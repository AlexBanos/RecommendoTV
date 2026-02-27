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
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
}
</style>
