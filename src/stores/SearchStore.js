import { defineStore } from 'pinia'
import { useMoviesStore } from './MoviesStore'

const url = 'https://api.themoviedb.org/3/search/movie?api_key=3ca20088fb2b90f12851de7d927413b5&query='

// Options API
// export const useSearchStore = defineStore('searchStore', {
//     state: () => ({
//         movies: [],
//         isLoading: false,
//     }),
//     actions: {
//         async getMovies(search) {
//             this.isLoading = true
//             const res = await fetch(`${url}${search}`)
//             const data = await res.json()
//             this.movies = data.results
//             this.isLoading = false
//         },
//         addToUserMovies(object) {
//             const moviesStore = useMoviesStore()
//             moviesStore.movies.push({ ...object, isWatched: false })
//             moviesStore.activeTab = 1
//         },
//     },
// })

// Composition API
import { ref } from 'vue'

export const useSearchStore = defineStore('searchStore', () => {
    const isLoading = ref(false)
    const movies = ref([])

    const getMovies = async (search) => {
        isLoading.value = true
        const res = await fetch(`${url}${search}`)
        const data = await res.json()
        movies.value = data.results
        isLoading.value = false
    }

    const addToUserMovies = (object) => {
        const moviesStore = useMoviesStore()
        moviesStore.movies.push({ ...object, isWatched: false })
        moviesStore.activeTab = 1
    }

    return { isLoading, movies, getMovies, addToUserMovies }
})
