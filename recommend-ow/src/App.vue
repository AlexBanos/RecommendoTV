<script setup>
import { onMounted } from 'vue';
import { useShowsStore } from '@/features/shows/store/useShowsStore';
import { showsService } from '@/features/shows/services/showsService';


// For Testing the Store and TvMaze API Service 
showsService.fetchAllShows().then(console.log);
showsService.searchShows('girls').then(console.log);

const showsStore = useShowsStore();

onMounted(async () => {
    await showsStore.fetchShowDetails(1);
    console.log('Show by id: ', showsStore.showDetails[1])

    await showsStore.fetchShowsByGenre('Comedy');
    console.log('Show by genre', showsStore.showsByGenre['Comedy'])
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
