import { defineStore } from 'pinia';
import { ref } from 'vue';
import { showsService } from '../services/showsService';

export const useShowsStore = defineStore('shows', () => {
    // state
    const allShows = ref([]);
    const showsByGenre = ref({});
    const showDetails = ref({});
    const loading = ref(false);
    const error = ref(null);
    const hasFetchedAll = ref(false);

    //actions
    async function fetchAllShows() {
        if (hasFetchedAll.value) return;

        try {
            loading.value = true;
            error.value = null;

            const shows = await showsService.fetchAllShows();
            allShows.value = shows;
            hasFetchedAll.value = true;
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    }

    async function fetchShowsByGenre(genre) {
        if (showsByGenre.value[genre]) return;

        if (!hasFetchedAll.value) {
            await fetchAllShows();
        }

        const filteredShows = allShows.value
            .filter((show) => show.genres.includes(genre))
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 10); // Top 10 results

        showsByGenre.value = { ...showsByGenre.value, [genre]: filteredShows };
    }

    async function fetchShowDetails(id) {
        if (showDetails.value[id]) return;

        try {
            loading.value = true;
            error.value = null;
            const show = await showsService.fetchShowById(id);
            showDetails.value = { ...showDetails.value, [id]: show };
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    }

    return {
        //state
        allShows,
        showsByGenre,
        showDetails,
        loading,
        error,
        hasFetchedAll,

        //actions
        fetchAllShows,
        fetchShowsByGenre,
        fetchShowDetails,
    };
});
