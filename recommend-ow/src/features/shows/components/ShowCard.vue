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
    },
});
</script>

<style scoped>
.show-card {
  display: block;
  width: 170px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.show-card:hover {
  transform: translateY(-4px);
}

.show-card:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}

.image-wrapper {
  border-radius: var(--radius);
  box-shadow: var(--shadow-soft);
}

.title {
  font-size: 0.95rem;
  font-weight: 600;
}

.rating {
  color: var(--accent);
  font-weight: 600;
}
</style>
