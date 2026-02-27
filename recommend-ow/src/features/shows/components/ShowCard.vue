<template>
    <router-link
        :to="{ name: 'ShowDetails', params: { id: show.id } }"
        class="show-card"
        :aria-label="`View details for ${show.name}`"
    >
        <article>
            <div class="image-wrapper">
                <img
                    v-if="show.image"
                    :src="show.image"
                    :alt="`Poster of ${show.name}`"
                />
                <div
                    v-else
                    class="image-placeholder"
                    aria-hidden="true"
                >
                    No Image
                </div>
            </div>

            <div class="content">
                <h3 class="title">{{ show.name }}</h3>

                <div class="meta">
                    <span
                        v-if="show.rating"
                        class="rating"
                    >
                        {{ show.rating }}
                    </span>
                </div>
            </div>
        </article>
    </router-link>
</template>

<script setup>
defineProps({
    show: {
        type: Object,
        required: true,
        default: null,
    },
});
</script>

<style scoped>
.show-card {
    display: block;
    width: 160px;
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s ease;
}

.show-card:hover {
    transform: scale(1.05);
}

.image-wrapper {
    width: 100%;
    height: 240px;
    background-color: #f2f2f2;
    overflow: hidden;
    border-radius: 8px;
}

.image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 0.8rem;
    color: #777;
}

.content {
    margin-top: 0.5rem;
}

.title {
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.2;
}

.meta {
    margin-top: 0.25rem;
    font-size: 0.8rem;
    color: #666;
}

.rating {
    font-weight: 500;
}
</style>
