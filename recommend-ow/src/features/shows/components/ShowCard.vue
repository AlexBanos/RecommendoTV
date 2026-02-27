<template>
    <router-link
        :to="{ name: 'ShowDetails', params: { id: show.id } }"
        class="show-card"
        :aria-label="`View details for ${show.name}`"
    >
        <article class="show-card-inner">
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
                        {{ show.rating.toFixed(1) }}
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
    },
});
</script>

<style scoped>
.show-card {
    display: block;
    width: var(--card-width, 160px);
    min-width: var(--card-width, 160px);
    flex: 0 0 var(--card-width, 160px);
    text-decoration: none;
    color: inherit;
    border-radius: 12px;
}

.show-card-inner {
    transition: transform 0.22s ease, box-shadow 0.22s ease;
    border-radius: inherit;
}

.show-card:hover .show-card-inner {
    transform: translateY(-5px);
    box-shadow: var(--shadow, 0 10px 24px rgba(0, 0, 0, 0.14));
}

.show-card:focus-visible {
    outline: 3px solid var(--focus, #1d4ed8);
    outline-offset: 3px;
}

.image-wrapper {
    width: 100%;
    aspect-ratio: 2 / 3;
    overflow: hidden;
    border-radius: 12px;
    background: var(--surface-alt, #ecf0f7);
    box-shadow: var(--shadow-soft, 0 4px 10px rgba(0, 0, 0, 0.08));
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
    color: var(--muted, #64748b);
    font-size: 0.85rem;
}

.title {
    margin: 0;
    font-size: 0.95rem;
    font-weight: 700;
    line-height: 1.35;
    min-height: 2.6em;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

.content {
    margin-top: 0.6rem;
}

.meta {
    margin-top: 0.45rem;
    min-height: 24px;
}

.rating {
    display: inline-flex;
    align-items: center;
    padding: 0.2rem 0.45rem;
    border-radius: 999px;
    background: var(--chip-bg, #e6edff);
    color: var(--chip-text, #1e40af);
    font-size: 0.8rem;
    font-weight: 700;
}

@media (prefers-reduced-motion: reduce) {
    .show-card-inner {
        transition: none;
    }
}
</style>
