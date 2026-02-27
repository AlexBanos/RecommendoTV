import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { useSearchStore } from '@/features/search/store/useSearchStore';
import { showsService } from '@/features/shows/services/showsService';

vi.mock('@/features/shows/services/showsService', () => ({
    showsService: {
        fetchAllShows: vi.fn(),
        fetchShowById: vi.fn(),
        searchShows: vi.fn(),
    },
}));

describe('useSearchStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
        vi.clearAllMocks();
    });

    it('clears results and skips API call on empty query', async () => {
        const store = useSearchStore();
        store.results = [{ id: 1, name: 'Old Result' }];

        await store.search('');

        expect(store.results).toEqual([]);
        expect(showsService.searchShows).not.toHaveBeenCalled();
    });

    it('keeps only the latest response when requests resolve out of order', async () => {
        const store = useSearchStore();

        let resolveFirst;
        let resolveSecond;

        const firstPromise = new Promise((resolve) => {
            resolveFirst = resolve;
        });
        const secondPromise = new Promise((resolve) => {
            resolveSecond = resolve;
        });

        showsService.searchShows
            .mockReturnValueOnce(firstPromise)
            .mockReturnValueOnce(secondPromise);

        const first = store.search('bat');
        const second = store.search('batm');

        resolveSecond([{ id: 2, name: 'Batman' }]);
        await second;

        resolveFirst([{ id: 1, name: 'Bat' }]);
        await first;

        expect(store.results).toEqual([{ id: 2, name: 'Batman' }]);
    });
});
