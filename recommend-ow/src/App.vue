<script setup>
import { onMounted } from 'vue';
import { useShowsStore } from '@/features/shows/store/useShowsStore';
import { showsService } from '@/features/shows/services/showsService';


// For Testing the Store and TvMaze API Service 
showsService.fetchAllShows().then(console.log);
showsService.searchShows('girls').then(console.log);

const store = useShowsStore();

onMounted(async () => {
    await store.fetchShowDetails(6);
    console.log('Show by id: ', store.getShowById(6))

    await store.fetchShowsByGenre('Comedy');
    console.log('Show by genre', store.getShowsByGenre('Comedy'))
});

</script>

<template>
    <h1>You did it!</h1>
    <p>
        Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
        documentation
    </p>
</template>

<style scoped></style>
