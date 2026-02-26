<template>
    <footer class="app-footer">
        <div class="footer-inner">
            <nav
                aria-label="Footer Navigation"
                class="footer-nav"
            >
                <ul>
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/">Genres</router-link>
                    </li>
                    <li>
                        <router-link to="/">Top Rated</router-link>
                    </li>
                </ul>
            </nav>

            <p class="footer-meta">
                Data provided by TVMaze API.
            </p>
        </div>
    </footer>
</template>

<style scoped>
.app-footer {
  border-top: 1px solid #e5e5e5;
  background: #fafafa;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
}

.footer-nav ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
  display: flex;
  gap: 1.5rem;
}

.footer-nav a {
  text-decoration: none;
  color: inherit;
  font-size: 0.9rem;
}

.footer-meta {
  font-size: 0.85rem;
  color: #666;
}
</style>