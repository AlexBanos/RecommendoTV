<template>
    <router-link
        :to="`/show/${show.id}`"
        class="show-card"
        :aria-label="`View details for ${show.name}`"
    >
        <article>
            <div class="image-wrapper">
                <img v-if="show.image" :src="show.image" :alt="showsService.name" />
                <div v-else class="image-placeholder" aria-hidden="true">No Image</div>
            </div>

            <div class="content">
                <h3 class="title">{{ show.name }}</h3>

                <div class="meta">
                    <span v-if="show.rating" class="rating">
                        {{ show.rating }}
                    </span>
                </div>
            </div>
        </article>
    </router-link>
</template>

<script setup>
import { showsService } from '../services/showsService';

defineProps({
    show: {
        type: Object,
        required: true,
        default: null,
    },
});
</script>

<style scoped></style>
