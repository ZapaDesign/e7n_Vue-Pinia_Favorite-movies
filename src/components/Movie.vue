<template>
    <div class="flex gap-4 flex-row" :class="inWatchedSection ? 'flex-row' : 'flex-col'">
        <img :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`" :alt="movie.original_title"
            class="w-32 rounded-xl">
        <div class="flex gap-4 flex-col">
            <h3>{{ movie.original_title }}</h3>
            <p v-if="inWatchedSection">{{ movie.overview }}</p>
            <div v-if="!isSearch" class="flex gap-2">
                <button class="bg-green-600" @click="moviesStore.toggleWatched(movie.id)">
                    <span v-if="!movie.isWatched">Watched</span>
                    <span v-else>Unwatched</span>
                </button>
                <button class="bg-red-600" @click="moviesStore.removeMovie(movie.id)">Delete</button>
            </div>
            <div v-else class="movie__buttons">
                <button @click="searchStore.addToUserMovies(movie)">Add</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMoviesStore } from '../stores/MoviesStore'
import { useSearchStore } from '../stores/SearchStore';
const moviesStore = useMoviesStore()
const searchStore = useSearchStore()

const props = defineProps({
    movie: {
        type: Object,
        required: true,
        default: () => { }
    },
    isSearch: {
        type: Boolean,
        required: false,
        default: false,
    },
    inWatchedSection: {
        type: Boolean,
        required: false,
        default: true,
    }
})
</script>