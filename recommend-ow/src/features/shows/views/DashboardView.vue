<template>
    <main class="dashboard">
        <h1>TV Shows Dashboard</h1>

        <BaseLoader v-if="showsStore.loading && !hasData" />

        <section>
            <ShowRow
                v-for="genre in FEATURED_GENRES"
                :key="genre"
                :genre="genre"
                :shows="showsStore.showsByGenre[genre]"
            />
        </section>

        <p v-if="!showsStore.loading && !hasData">No shows available.</p>
    </main>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import ShowRow from '../components/ShowRow.vue';
import { useShowsStore } from '../store/useShowsStore';
import { FEATURED_GENRES } from '../config/featuredGenres';
import BaseLoader from '@/shared/components/BaseLoader.vue';

const showsStore = useShowsStore();

onMounted(() => {
    FEATURED_GENRES.forEach((genre) => {
        showsStore.fetchShowsByGenre(genre);
    });
});

const hasData = computed(() =>
    FEATURED_GENRES.some((genre) => (showsStore.showsByGenre[genre] ?? []).length > 0),
);
</script>
