import { describe, expect, it, vi } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { mount } from '@vue/test-utils';
import ShowDetailsView from '@/features/shows/views/ShowDetailsView.vue';
import { useShowsStore } from '@/features/shows/store/useShowsStore';

describe('ShowDetailsView', () => {
    it('fetches details on initial mount and when id prop changes', async () => {
        const pinia = createPinia();
        setActivePinia(pinia);

        const store = useShowsStore();
        const fetchSpy = vi.spyOn(store, 'fetchShowDetails').mockResolvedValue();

        const wrapper = mount(ShowDetailsView, {
            props: { id: '10' },
            global: { plugins: [pinia] },
        });

        expect(fetchSpy).toHaveBeenCalledWith('10');

        await wrapper.setProps({ id: '11' });

        expect(fetchSpy).toHaveBeenLastCalledWith('11');
    });

    it('renders known show details from store cache', () => {
        const pinia = createPinia();
        setActivePinia(pinia);

        const store = useShowsStore();
        store.showDetails = {
            42: {
                id: 42,
                name: 'Store Backed Show',
                image: null,
                rating: 8.1,
                genres: ['Drama', 'Comedy'],
                summary: '<p>Ready</p>',
            },
        };

        const wrapper = mount(ShowDetailsView, {
            props: { id: '42' },
            global: { plugins: [pinia] },
        });

        expect(wrapper.text()).toContain('Store Backed Show');
        expect(wrapper.text()).toContain('8.1');
        expect(wrapper.text()).toContain('Drama, Comedy');
    });
});