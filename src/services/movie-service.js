export const API = 'http://localhost:4000/movies'
export default class MoviesService {
    async getMovies() {
       const response = await fetch(API);
       return await response.json();
    }

    async getMoviesWithParams(params) {
        const response = await fetch(`${API}?${params}`);
        if (!response.ok) {
            const message = `An error has occurred: ${response.status}`;
            throw new Error(message);
        }
        return await response.json();
    }

    async addMovie(movie) {
        const response = await fetch(API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(movie)
        })
        if (!response.ok) {
            const message = `An error has occurred: ${response.status}`;
            throw new Error(message);
        }
        return await response.json();
    }

    async getMovieById(id) {
        const response = await fetch(`${API}/${id}`)
        if (!response.ok) {
            const message = `An error has occurred: ${response.status}`;
            throw new Error(message);
        }
        return await response.json();
    }

    async updateMovieById(movie) {
        const response = await fetch(API, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(movie)
        })
        if (!response.ok) {
            const message = `An error has occurred: ${response.status}`;
            throw new Error(message);
        }
        return await response.json();
    }

    async deleteMovieById(id) {
        const response = await fetch(`${API}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        if (!response.ok) {
            const message = `An error has occurred: ${response.status}`;
            throw new Error(message);
        }
        return response;
    }
}