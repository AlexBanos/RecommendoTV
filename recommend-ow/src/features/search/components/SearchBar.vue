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
            @input="handleInput"
            @focus="openDropdown"
            placeholder="Search shows..."
            class="search-input"
            autocomplete="off"
        />

        <div
            v-if="showDropdown"
            class="search-dropdown"
            role="listbox"
        >
            <div
                v-if="loading"
                class="search-status"
                role="status"
            >
                Searching...
            </div>

            <div
                v-else-if="results.length === 0 && localQuery"
                class="search-status"
            >
                No results found
            </div>

            <ul v-else>
                <li
                    v-for="show in results"
                    :key="show.id"
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
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { useSearchStore } from '../store/useSearchStore';

const searchStore = useSearchStore();
const router = useRouter();

const localQuery = ref('');
const showDropdown = ref(false);
const wrapper = ref(null);

const results = computed(() => searchStore.results);
const loading = computed(() => searchStore.loading);

function handleInput() {
    searchStore.search(localQuery.value);
}

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
    padding: 0.5rem 0.75rem;
    border: 1px solid #ddd;
    border-radius: 6px;
}

.search-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    border: 1px solid #ddd;
    border-radius: 6px;
    margin-top: 0.5rem;
    max-height: 300px;
    overflow-y: auto;
    z-index: 10;
}

.search-result {
    width: 100%;
    padding: 0.6rem 0.75rem;
    text-align: left;
    background: none;
    border: none;
    cursor: pointer;
}

.search-result:hover {
    background: #f5f5f5;
}

.search-status {
    padding: 0.75rem;
    color: #666;
}

.sr-only {
    position: absolute;
    left: -9999px;
}
</style>
