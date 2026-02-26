<template>
    <main
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
    </main>

    <BaseLoader v-else-if="storeToRefs.loading" />
    <p v-else>Show not found.</p>
</template>

<script setup>
import { useShowsStore } from '../store/useShowsStore';
import { computed, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import BaseLoader from '@/shared/components/BaseLoader.vue';


const showsStore = useShowsStore();

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
});

const show = computed(() => showsStore.showDetails[props.id]);

onMounted(() => {
    showsStore.fetchShowDetails(props.id);
});
</script>
