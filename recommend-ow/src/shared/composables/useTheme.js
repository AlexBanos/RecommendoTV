import { computed, ref } from 'vue';

const THEME_KEY = 'rtv-theme';
const theme = ref('light');

function applyTheme(nextTheme) {
    document.documentElement.setAttribute('data-theme', nextTheme);
    theme.value = nextTheme;
}

function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const initial = saved === 'dark' ? 'dark' : 'light';
    applyTheme(initial);
}

function toggleTheme() {
    const next = theme.value === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
}

export function useTheme() {
    return {
        theme,
        isDark: computed(() => theme.value === 'dark'),
        initTheme,
        toggleTheme,
    };
}
