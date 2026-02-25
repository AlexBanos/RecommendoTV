import { defineStore } from 'pinia';
import { showsService } from '../services/showsService';

export const useShowsStore = defineStore('shows', {
    state: () => ({
        allShows: [],
        showsByGenre: {},
        showDetails: {},
        loading: false,
        hasFetchedAll: false,
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
        async fetchAllShows() {
            if (this.hasFetchedAll) return;

            try {
                this.loading = true;
                this.error = null;

                const shows = await showsService.fetchAllShows();
                this.allShows = shows;
                this.hasFetchedAll = true;
            } catch (err) {
                this.error = err.message;
            } finally {
                this.loading = false;
            }
        },

        async fetchShowsByGenre(genre) {
            if (this.showsByGenre[genre]) return;

            if (!this.hasFetchedAll) {
                await this.fetchAllShows();
            }

            const filteredShows = this.allShows
                .filter((show) => show.genres.includes(genre))
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 10); // Top 10 results

            this.showsByGenre[genre] = filteredShows;
        },

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
