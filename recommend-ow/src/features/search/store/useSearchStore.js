import { defineStore } from 'pinia';
import { showsService } from '@/features/shows/services/showsService';
import { ref } from 'vue';

export const useSearchStore = defineStore('search', () => {
    //state
    const query = ref('');
    const results = ref([]);
    const loading = ref(false);
    const error = ref(null);
    const lastRequestId = ref(0);

    //actions
    async function search(newQuery) {
        if (!newQuery) {
            results.value = [];
            return;
        }

        query.value = newQuery;
        const requestId = ++lastRequestId.value;

        try {
            loading.value = true;
            error.value = null;

            const response = await showsService.searchShows(newQuery);

            if (requestId === lastRequestId.value) {
                results.value = response;
            }
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    }

    function clear() {
        query.value = '';
        results.value = [];
    }

    return {
        //state
        query,
        results,
        loading,
        error,

        //actions
        search,
        clear,
    };
});
