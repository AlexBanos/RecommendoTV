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

                <!-- GitHub SVG Icon. I should extract this into a component-->
            <a
                href="https://github.com/AlexBanos/RecommendoTV/tree/main/recommend-ow"
                target="_blank"
                rel="noopener noreferrer"
                class="github-button"
                aria-label="View project on GitHub"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="github-icon"
                >
                    <path
                        d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.2 11.39c.6.11.82-.26.82-.58
                    0-.29-.01-1.06-.02-2.08-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76
                    -1.09-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99
                    .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96
                    0-1.32.47-2.4 1.23-3.25-.12-.3-.53-1.52.12-3.18
                    0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23
                    .65 1.66.24 2.88.12 3.18.77.85 1.23 1.93 1.23 3.25
                    0 4.63-2.8 5.66-5.48 5.96.43.37.81 1.1.81 2.22
                    0 1.6-.01 2.89-.01 3.29 0 .32.21.69.83.57A12 12 0 0024 12
                    c0-6.63-5.37-12-12-12z"
                    />
                </svg>
            </a>
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

.github-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    color: var(--text, #111827);
    transition: background 0.2s ease, transform 0.15s ease;
}

.github-button:hover {
    background: var(--border, #e5e7eb);
    transform: translateY(-2px);
}

.github-icon {
    width: 20px;
    height: 20px;
}
</style>
