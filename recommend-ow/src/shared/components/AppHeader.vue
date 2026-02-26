<template>
    <header class="app-header">
        <div class="header-inner">
            <router-link
                to="/"
                class="logo"
            >
                <span class="logo-text">RecommendoTV</span>
            </router-link>

            <div class="search-container">
                <SearchBar />
            </div>
        </div>
    </header>
</template>

<script setup>
import SearchBar from '@/features/search/components/SearchBar.vue';
</script>

<style scoped>
.app-header {
    border-bottom: 1px solid #e5e5e5;
    background: white;
}

.header-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
}

.logo {
    text-decoration: none;
    color: inherit;
}

.logo-text {
    font-size: 1.4rem;
    font-weight: 600;
}

.search-container {
    flex: 1;
    max-width: 400px;
}
</style>
