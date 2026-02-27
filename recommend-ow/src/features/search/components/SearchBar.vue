<template>
    <div
        ref="wrapper"
        class="search-wrapper"
    >
        <label
            for="search-input"
            class="sr-only"
        >
            Search TV Shows
        </label>

        <input
            id="search-input"
            type="text"
            v-model="localQuery"
            @focus="openDropdown"
            @keydown.esc.prevent="closeDropdown"
            placeholder="Search shows..."
            class="search-input"
            autocomplete="off"
            aria-controls="search-results"
            :aria-expanded="showDropdown"
        />

        <div
            v-if="showDropdown"
            id="search-results"
            class="search-dropdown"
        >
            <div
                v-if="loading"
                class="search-status"
                role="status"
            >
                Searching...
            </div>

            <div
                v-else-if="localQuery.trim() && results.length === 0"
                class="search-status"
            >
                No matching shows
            </div>

            <ul
                v-else
                class="search-list"
            >
                <li
                    v-for="show in results"
                    :key="show.id"
                >
                    <button
                        type="button"
                        class="search-result"
                        @click="selectShow(show.id)"
                    >
                        {{ show.name }}
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useSearchStore } from '../store/useSearchStore';
import { useDebounce } from '@/shared/composables/useDebounce';

const searchStore = useSearchStore();
const router = useRouter();

const localQuery = ref('');
const showDropdown = ref(false);
const wrapper = ref(null);

const results = computed(() => searchStore.results);
const loading = computed(() => searchStore.loading);

const debouncedQuery = useDebounce(localQuery, 350);

function selectShow(id) {
    router.push({
        name: 'ShowDetails',
        params: { id },
    });

    closeDropdown();
    searchStore.clear();
    localQuery.value = '';
}

function openDropdown() {
    if (localQuery.value.trim()) {
        showDropdown.value = true;
    }
}

function closeDropdown() {
    showDropdown.value = false;
}

function handleClickOutside(event) {
    if (wrapper.value && !wrapper.value.contains(event.target)) {
        closeDropdown();
    }
}

watch(debouncedQuery, (value) => {
    const query = value.trim();

    if (!query) {
        searchStore.clear();
        closeDropdown();
        return;
    }

    showDropdown.value = true;
    searchStore.search(query);
});

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.search-wrapper {
    position: relative;
    width: 100%;
}

.search-input {
    width: 100%;
    padding: 0.58rem 0.8rem;
    border: 1px solid var(--border, #d0d5dd);
    border-radius: 10px;
    background: var(--surface, #ffffff);
    color: var(--text, #111827);
    transition:
        border-color 0.16s ease,
        box-shadow 0.16s ease;
}

.search-input:focus {
    border-color: var(--focus, #1d4ed8);
     box-shadow: 0 0 0 3px var(--focus-ring, rgba(29, 78, 216, 0.18));
    outline: none;
}

.search-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    margin-top: 0.45rem;
    background: var(--surface, #ffffff);
    border: 1px solid var(--border, #d0d5dd);
    border-radius: 12px;
    box-shadow: var(--shadow, 0 10px 24px rgba(0, 0, 0, 0.14));
    max-height: 340px;
    overflow-y: auto;
    z-index: 30;
}

.search-list {
    margin: 0;
    padding: 0.25rem;
    list-style: none;
}

.search-result {
    width: 100%;
    display: block;
    align-items: center;
    justify-content: space-between;
    gap: 0.7rem;
    padding: 0.58rem 0.65rem;
    text-align: left;
    color: inherit;
    background: none;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.16s ease;
}

.search-result:hover,
.search-result:focus-visible {
    background: var(--surface-alt, #edf2ff);
    outline: none;
}

.search-status {
    padding: 0.72rem 0.75rem;
    color: var(--muted, #64748b);
    font-size: 0.92rem;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
</style>
