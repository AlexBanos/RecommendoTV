<script setup>
import { onMounted } from 'vue';
import { useShowsStore } from '@/features/shows/store/useShowsStore';
import ShowRow from './features/shows/components/ShowRow.vue';
import { FEATURED_GENRES } from './features/shows/config/featuredGenres';

const showsStore = useShowsStore();

onMounted(async () => {
    FEATURED_GENRES.forEach((genre) => {
        showsStore.fetchShowsByGenre(genre);
    });
});
</script>

<template>
    <h1>TV Shows Dashboard</h1>

    <ShowRow
        v-for="genre in FEATURED_GENRES"
        :key="genre"
        :genre="genre"
        :shows="showsStore.showsByGenre[genre]"
    />

    <p>
        Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
        documentation
    </p>
</template>

<style scoped></style>
