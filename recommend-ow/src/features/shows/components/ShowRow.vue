<template>
    <section
        class="show-row"
        :aria-labelledby="headingId"
    >
        <header class="row-header">
            <h2 :id="headingId">
                {{ genre }}
            </h2>
        </header>

        <div
            v-if="loading"
            class="row-loading"
            role="status"
            aria-live="polite"
        >
            Loading Shows ...
        </div>

        <div
            v-else-if="!shows || shows.length === 0"
            class="row-empty"
        >
            No shows available
        </div>

        <div
            v-else
            class="row-content-wrap"
        >
            <div
                class="row-content"
                tabindex="0"
                :aria-label="`${genre} shows`"
            >
                <ShowCard
                    v-for="show in shows"
                    :key="show.id"
                    :show="show"
                />
            </div>
        </div>
        <p
            v-if="showSwipeHint"
            class="row-scroll-hint"
            aria-hidden="true"
        >
            Swipe to explore
        </p>
    </section>
</template>

<script setup>
import { computed } from 'vue';
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

const headingId = computed(() => `genre-${props.genre.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`);
const showSwipeHint = computed(() => Array.isArray(props.shows) && props.shows.length > 1);
</script>

<style scoped>
.show-row {
    margin-bottom: 2rem;
}

.row-header {
    margin-bottom: 0.85rem;
}

.row-header h2 {
    margin: 0;
    font-size: 1.1rem;
    letter-spacing: 0.01em;
}

.row-content-wrap {
    position: relative;
}

.row-content-wrap::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0.8rem;
    width: 28px;
    pointer-events: none;
    background: linear-gradient(to right, transparent, var(--bg));
}

.row-content {
    --card-width: 160px;
    display: flex;
    flex-wrap: nowrap;
    gap: 0.95rem;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x proximity;
    scrollbar-gutter: stable both-edges;
    padding: 0.2rem 1rem 0.8rem 0.2rem;
    border-radius: 12px;
}

.row-content:focus-visible {
    outline: 3px solid var(--focus, #1d4ed8);
    outline-offset: 2px;
}

.row-content > * {
    scroll-snap-align: start;
}

.row-content::-webkit-scrollbar {
    height: 9px;
}

.row-content::-webkit-scrollbar-thumb {
    background: var(--border, #c2c7d1);
    border-radius: 999px;
}

.row-loading,
.row-empty {
    padding: 0.4rem 0.15rem 0.75rem;
    color: var(--muted, #64748b);
    font-size: 0.95rem;
}

.row-scroll-hint {
    margin: 0.25rem 0 0;
    font-size: 0.8rem;
    color: var(--muted, #64748b);
}

@media (min-width: 641px) {
    .row-scroll-hint {
        display: none;
    }
}
</style>
