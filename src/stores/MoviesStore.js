import { defineStore } from 'pinia'

// Options API
// export const useMoviesStore = defineStore('moviesStor', {
//     state: () => ({
//         movies: [],
//         activeTab: 2,
//     }),
//     getters: {
//         watchedMovies() {
//             return this.movies.filter((movie) => movie.isWatched)
//         },
//         totalCountMovies() {
//             return this.movies.length
//         },
//     },
//     actions: {
//         setActiveTab(id) {
//             this.activeTab = id
//         },
//         toggleWatched(id) {
//             const idx = this.movies.findIndex((movie) => movie.id === id)
//             this.movies[idx].isWatched = !this.movies[idx].isWatched
//         },
//         removeMovie(id) {
//             this.movies = this.movies.filter((movie) => movie.id !== id)
//         },
//     },
// })

// Composition API
import { ref, computed, watch } from 'vue'

export const useMoviesStore = defineStore('moviesStor', () => {
    const movies = ref([])
    const activeTab = ref(1)

    const moviesInLocalStorage = localStorage.getItem('movies')
    if (moviesInLocalStorage) {
        movies.value = JSON.parse(moviesInLocalStorage)._value
    }

    const watchedMovies = computed(() => movies.value.filter((movie) => movie.isWatched))
    const totalCountMovies = computed(() => movies.value.length)

    const setActiveTab = (id) => (activeTab.value = id)
    const toggleWatched = (id) => {
        const idx = movies.value.findIndex((movie) => movie.id === id)
        movies.value[idx].isWatched = !movies.value[idx].isWatched
    }
    const removeMovie = (id) => {
        movies.value = movies.value.filter((movie) => movie.id !== id)
    }

    watch(
        () => movies,
        (state) => {
            localStorage.setItem('movies', JSON.stringify(state))
        },
        { deep: true }
    )

    return { movies, activeTab, watchedMovies, totalCountMovies, setActiveTab, toggleWatched, removeMovie }
})
