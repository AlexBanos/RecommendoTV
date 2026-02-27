import { beforeEach, describe, expect, it } from 'vitest';
import { useTheme } from '@/shared/composables/useTheme';

describe('useTheme', () => {
    beforeEach(() => {
        localStorage.clear();
        document.documentElement.removeAttribute('data-theme');
    });

    it('initializes light mode when no preference exists', () => {
        const { initTheme, isDark } = useTheme();

        initTheme();

        expect(document.documentElement.getAttribute('data-theme')).toBe('light');
        expect(isDark.value).toBe(false);
    });

    it('toggles mode and persists preference', () => {
        const { initTheme, toggleTheme, isDark } = useTheme();

        initTheme();
        toggleTheme();

        expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
        expect(localStorage.getItem('rtv-theme')).toBe('dark');
        expect(isDark.value).toBe(true);
    });
});
