<template>
    <div class="p-8">
        <header class="mb-4">
            <h1 class="font-bold text-2xl">My Favorite Movies</h1>
        </header>
        <div class="tabs">
            <button @click="moviesStore.setActiveTab(1)">Favorite</button>
            <button @click="moviesStore.setActiveTab(2)">Search</button>
        </div>
        <div v-if="moviesStore.activeTab === 1" class="flex gap-4">
            <div>
                <h2 class="mb-2">All Movies</h2>
                <div class="flex gap-4 flex-col">
                    <Movie v-for="movie of moviesStore.movies" :key="movie.id" :movie="movie"
                        :inWatchedSection="true" />
                </div>
            </div>
            <div>
                <h2 class="mb-2">Watched Movies</h2>
                <div class="flex gap-4 flex-col">
                    <Movie v-for="movie of moviesStore.watchedMovies" :key="movie.id" :movie="movie" />
                </div>
            </div>
        </div>
        <div v-if="moviesStore.activeTab === 2" class="search">
            <Search />
        </div>
    </div>
</template>

<script setup>
import Movie from './components/Movie.vue'
import Search from './components/Search.vue'
import { useMoviesStore } from './stores/MoviesStore'

const moviesStore = useMoviesStore()
</script>


<style scoped>

</style>
