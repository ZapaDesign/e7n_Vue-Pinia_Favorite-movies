<template>
    <form class="bg-red-500 p-3 my-4 rounded-lg flex gap-4 items-center"
        @submit.prevent="searchStore.getMovies(searchMovie); searchMovie = ''">
        <label for="search">Search movie</label>
        <input class="rounded px-2 py-1" id="search" type="text" placeholder="Search movie" v-model="searchMovie">
    </form>
    <Loader v-if="searchStore.isLoading" />
    <div class="flex flex-col gap-4" v-else>
        <Movie v-for="movie of searchStore.movies" :key="movie.id" :movie="movie" :isSearch="true" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSearchStore } from '../stores/SearchStore'
import Movie from '../components/Movie.vue'
import Loader from '../components/Loader.vue'

const searchStore = useSearchStore()
const searchMovie = ref('')
</script>
