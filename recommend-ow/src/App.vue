<script setup>
import { showsService } from '@/features/shows/services/showsService';
showsService.fetchAllShows().then(console.log);
showsService.searchShows('girls').then(console.log);
</script>

<template>
    <h1>You did it!</h1>
    <p>
        Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
        documentation
    </p>
</template>

<style scoped></style>
