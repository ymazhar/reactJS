import * as axios from "axios";

const moviesInstance = axios.create({
    baseURL: 'http://localhost:4000/',
});


export const moviesAPI = {
    getMovies() {
        return moviesInstance.get("movies")
    },
    search(query) {
        return moviesInstance.get("movies", {params: {search: query}})
    },
    searchBy(query) {
        return moviesInstance.get("movies", {params: {searchBy: query}})
    },
    sortBy(query) {
        return moviesInstance.get("movies", {params: {sortBy: query}})
    },
    getMoviesByGenres(query){
        return moviesInstance.get("movies", {params: {filter: query}})
    },
    addMovie(movie) {
        return moviesInstance.post("movies", movie)
    },
    getMovieById(id) {
        return moviesInstance.get(`movies/${id}`)
    },
    updateMovie(movie) {
        return moviesInstance.put(`movies/`, movie)
    },
    deleteMovie(id) {
        return moviesInstance.delete(`movies/${id}`)
    }
}