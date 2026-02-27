<template>
    <div
        class="search-wrapper"
        ref="wrapper"
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
            placeholder="Search shows..."
            class="search-input"
            autocomplete="off"
        />

        <div
            v-if="showDropdown"
            id="search-results"
            class="search-dropdown"
            role="listbox"
        >
            <ul>
                <li
                    v-for="show in results"
                    :key="show.id"
                    :id="`search-item-${show.id}`"
                    role="option"
                >
                    <button
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
    showDropdown.value = true;
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
    searchStore.search(value.trim());
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
    transition: border-color 0.16s ease, box-shadow 0.16s ease;
}

.search-input:focus {
    border-color: var(--focus, #1d4ed8);
    box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.18);
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
    display: flex;
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

.search-result-title {
    font-size: 0.95rem;
    line-height: 1.3;
}

.search-result-rating {
    flex-shrink: 0;
    padding: 0.12rem 0.45rem;
    border-radius: 999px;
    background: var(--chip-bg, #e6edff);
    color: var(--chip-text, #1e40af);
    font-size: 0.75rem;
    font-weight: 700;
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
