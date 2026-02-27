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
    border-bottom: 1px solid var(--border);
    background: var(--surface);
    box-shadow: var(--shadow-soft);
    position: sticky;
    top: 0;
    z-index: 20;
}

.header-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: center;
}

.logo-text {
    font-size: 1.35rem;
    font-weight: 700;
    letter-spacing: 0.2px;
}

.logo:focus-visible {
    border-radius: 8px;
}

.search-container {
    flex: 1;
    min-width: 220px;
    max-width: 480px;
    margin-left: auto;
}

@media (max-width: 640px) {
    .header-inner {
        padding: 0.9rem 1rem;
    }

    .search-container {
        min-width: 100%;
        max-width: none;
    }
}
</style>
