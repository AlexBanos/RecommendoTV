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
            />
        </div>
    </section>
</template>

<script setup>
import ShowCard from './ShowCard.vue';
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
</script>

<style scoped>
.show-row {
  margin-bottom: 2rem;
}

.row-header {
  margin-bottom: 1rem;
}

.row-content {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
}

.row-loading,
.row-empty {
  padding: 1rem 0;
  color: #666;
}
</style>
