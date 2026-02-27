<template>
    <footer class="app-footer">
        <div class="footer-inner">
            <router-link
                to="/"
                class="footer-brand"
            >
                RecommendoTV
            </router-link>
            <p class="footer-meta">Data provided by TVMaze API.</p>
        </div>
    </footer>
</template>

<style scoped>
.app-footer {
    border-top: 1px solid var(--border, #d0d5dd);
    background: var(--surface, #ffffff);
}

.footer-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.15rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
}

.footer-brand {
    text-decoration: none;
    color: var(--text, #111827);
    font-size: 0.98rem;
    font-weight: 700;
    letter-spacing: 0.01em;
}

.footer-meta {
    margin: 0;
    font-size: 0.88rem;
    color: var(--muted, #64748b);
}
</style>
