import { defineStore } from 'pinia';
import { showsService } from '../services/showsService';

export const useShowsStore = defineStore('shows', {
    state: () => ({
        allShows: [],
        showsByGenre: {},
        showDetails: {},
        loading: false,
    }),

    getters: {
        getShowsByGenre: (state) => (genre) => {
            return state.showsByGenre[genre] || [];
        },

        getShowById: (state) => (id) => {
            return state.showDetails[id] || null;
        },
    },

    actions: {
        async fetchShowDetails(id) {
            if (this.showDetails[id]) return;

            try {
                this.loading = true;
                const show = await showsService.fetchShowById(id);
                this.showDetails[id] = show;
            } catch (err) {
                this.error = err.message;
            } finally {
                this.loading = false;
            }
        },
    },
});
