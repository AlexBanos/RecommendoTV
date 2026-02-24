import { defineStore } from 'pinia';
import { showsService } from '../services/showsService';

export const useShowsStore = defineStore('shows', {
    state: () => ({
        allShows: []
    })
})
