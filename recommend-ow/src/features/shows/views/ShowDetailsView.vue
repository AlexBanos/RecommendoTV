<template>
    <section
        v-if="show"
        class="details"
    >
        <h1>{{ show.name }}</h1>

        <img
            v-if="show.image"
            :src="show.image"
            :alt="`Poster of ${show.name}`"
        />

        <p><strong>Rating:</strong> {{ show.rating }}</p>
        <p><strong>Genres:</strong> {{ show.genres.join(', ') }}</p>
        <p v-html="show.summary" />
    </section>

    <BaseLoader v-else-if="loading" />

    <p
        v-else-if="error"
        class="error"
    >
        Failed to load show details.
    </p>

    <p v-else>Show not found.</p>
</template>

<script setup>
import { useShowsStore } from '../store/useShowsStore';
import { computed, watch } from 'vue';
import { storeToRefs } from 'pinia';
import BaseLoader from '@/shared/components/BaseLoader.vue';

const showsStore = useShowsStore();
const { loading, error } = storeToRefs(showsStore);

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
});

const show = computed(() => showsStore.showDetails[props.id]);

watch(
    () => props.id,
    (id) => {
        showsStore.fetchShowDetails(id);
    },
    { immediate: true },
);
</script>

<style scoped>
.details {
    padding: 1.5rem;
    max-width: 860px;
}

.error {
    color: #b91c1c;
}
</style>
