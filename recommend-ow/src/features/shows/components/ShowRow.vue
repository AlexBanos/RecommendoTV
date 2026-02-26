<template>
    <section class="show-row" :aria-labelledby="`heading-${genre}`">
        <header class="row-header">
            <h2 :id="`heading-${genre}`">
                {{ genre }}
            </h2>
        </header>

        <div v-if="loading" class="row-loading" role="status" aria-live="polite">
            Loading Shows ...
        </div>

        <div v-else-if="!shows || shows.length === 0" class="row-empty">No shows available</div>

        <div v-else class="row-content">
            <ShowCard
                v-for="show in shows"
                :key="show.id"
                :show="show"
                @click="handleSelect(show.id)"
            />
        </div>
    </section>
</template>

<script setup>
import ShowCard from './ShowCard.vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    genre: {
        type: String,
        required: true,
    },
    shows: {
        type: Array,
        required: true,
    },
    loading: {
        type: Boolean,
        default: false,
    },
});

const router = useRouter();

function handleSelect(id) {
    router.push(`/shows/${id}`);
}
</script>
