describe('Testiranje funkcionalnosti baze filmova', () => {

	describe('Testing addMovie method', function () {    

	  it('should add a movie', () => {
		const mdb = new MovieDatabase()
		const movie1 = {
		  title: "Rocky",
		  year: 1980,
		}
		const movie2 = {
		  title: "Rocky II",
		  year: 1982,
		}
		expect(mdb.movies.length).toBe(0)
		mdb.addMovie(movie1)
		expect(mdb.movies.length).toBe(1)
		mdb.addMovie(movie2)
		expect(mdb.movies.length).toBe(2)
	  })
	  
	  it('should create unique id', () => {
		const mdb = new MovieDatabase()
		const movie1 = {
		  title: "Rocky",
		  year: 1980,
		}
		const movie2 = {
		  title: "Rocky II",
		  year: 1982,
		}
		mdb.addMovie(movie1)
		mdb.addMovie(movie2)
		expect(mdb.movies[0].id).not.toBe(mdb.movies[1].id)
	  })
	 
	   it('should not add movie without title or year', () => {
		const mdb = new MovieDatabase()
		expect(mdb.movies.length).toBe(0)
		mdb.addMovie({year: 2000})
		expect(mdb.movies.length).toBe(0)
		mdb.addMovie({title: "Prohujalo sa vihorom"})
		expect(mdb.movies.length).toBe(0)
	  })

	});

	describe('Testing deleteMovie method', function () {   
 
	  it('should delete a movie', () => {
		const mdb = new MovieDatabase()
		const movie1 = {
		  title: "Rocky",
		  year: 1980,
		}
		const movie2 = {
		  title: "Rocky II",
		  year: 1982,
		}
		mdb.addMovie(movie1)
		mdb.addMovie(movie2)
		const id = mdb.movies[0].id
		mdb.deleteMovie(id)
		expect(mdb.movies.length).toBe(1)
		expect(mdb.movies[0].id).not.toBe(id)
	  })

	});
 
})
