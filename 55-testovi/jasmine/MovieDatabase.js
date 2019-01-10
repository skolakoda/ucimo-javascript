let id = 0

class MovieDatabase {
	constructor() {
		this.movies = []
	}

	addMovie(movie) {
		if (!movie.title || !movie.year) return
		movie.id = id++
		this.movies.push(movie)
	}
	
	deleteMovie(id) {
		this.movies = this.movies.filter(m => m.id != id)
	}

}
