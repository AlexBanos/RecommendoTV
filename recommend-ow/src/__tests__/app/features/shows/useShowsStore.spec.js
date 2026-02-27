import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { useShowsStore } from '@/features/shows/store/useShowsStore';
import { showsService } from '@/features/shows/services/showsService';

vi.mock('@/features/shows/services/showsService', () => ({
    showsService: {
        fetchAllShows: vi.fn(),
        fetchShowById: vi.fn(),
        searchShows: vi.fn(),
    },
}));

describe('useShowsStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
        vi.clearAllMocks();
    });

    it('loads once, sorts by rating, and keeps only top 10 per genre', async () => {
        const store = useShowsStore();
        const sportsShows = Array.from({ length: 12 }, (_, index) => ({
            id: index + 1,
            name: `Sports ${index + 1}`,
            rating: index + 1,
            genres: ['Sports'],
        }));

        showsService.fetchAllShows.mockResolvedValue([
            ...sportsShows,
            { id: 99, name: 'Comedy only', rating: 9.2, genres: ['Comedy'] },
        ]);

        await store.fetchShowsByGenre('Sports');
        await store.fetchShowsByGenre('Sports');

        expect(showsService.fetchAllShows).toHaveBeenCalledTimes(1);
        expect(store.showsByGenre.Sports).toHaveLength(10);
        expect(store.showsByGenre.Sports[0].rating).toBe(12);
        expect(store.showsByGenre.Sports[9].rating).toBe(3);
    });

    it('caches show details by id and avoids duplicate requests', async () => {
        const store = useShowsStore();
        const normalizedShow = {
            id: 77,
            name: 'Cached Show',
            rating: 7.7,
            genres: ['Drama'],
        };

        showsService.fetchShowById.mockResolvedValue(normalizedShow);

        await store.fetchShowDetails(77);
        await store.fetchShowDetails(77);

        expect(showsService.fetchShowById).toHaveBeenCalledTimes(1);
        expect(store.showDetails[77]).toEqual(normalizedShow);
    });

    it('stores error state when full list fetch fails', async () => {
        const store = useShowsStore();
        showsService.fetchAllShows.mockRejectedValue(new Error('Network down'));

        await store.fetchAllShows();

        expect(store.error).toBe('Network down');
        expect(store.loading).toBe(false);
    });
});