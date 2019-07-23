let key = "c10d7bf7"

let movieList = document.getElementById("movieList")
let movieFeature = document.getElementById("movieFeature")

let moviesURL = `http://www.omdbapi.com/?s=batman&apikey=${key}`

function getIMDBid(id) {
    let moviesSpecifics = `http://www.omdbapi.com/?i=${id}&apikey=${key}`
    console.log(moviesSpecifics)
    let req = new XMLHttpRequest()
    req.open('GET', moviesSpecifics)
    req.addEventListener('load', () => {
        let movieInfo = JSON.parse(event.currentTarget.responseText)
        movieFeature.innerHTML =  `<div class="main-movie">
                                        <div class="main-title-and-poster">
                                            <h1>${movieInfo.Title}</h1>
                                            <img src="${movieInfo.Poster}" class="large-movie-poster" />
                                        </div>
                                        <div class="main-information">
                                            <span>${movieInfo.Year}</span>
                                            <span>${movieInfo.Rated}</span>
                                            <span>${movieInfo.Released}</span>
                                            <span>${movieInfo.Director}</span>
                                        </div>
                                    </div>`
        console.log(movieFeature)
    })
    req.send()
}

function getMovies() {
    let req = new XMLHttpRequest()
    req.open('GET',moviesURL)
    req.addEventListener('load',() => {
        let movies = JSON.parse(event.currentTarget.responseText)
        let movieItems =  movies.Search.map(movie => {
            console.log(movie)
            return `<div class="featured-movie">
                        <div class="title-and-poster">
                            <h2>${movie.Title}</h2>
                            <img src="${movie.Poster}" onclick="getIMDBid('${movie.imdbID}')" class="movie-poster" />
                        </div>
                    </div>`
        })
        movieList.innerHTML = movieItems.join('')
    }) 
    req.send()
}

getMovies()