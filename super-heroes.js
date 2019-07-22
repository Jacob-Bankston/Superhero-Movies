let key = "c10d7bf7"

let movieList = document.getElementById("movieList")

let moviesURL = `http://www.omdbapi.com/?s=batman&apikey=${key}`

let moviesSpecifics = `http://www.omdbapi.com/?i=insertSelectedimdbIDhere&apikey=${key}`

let req = new XMLHttpRequest()
req.open('GET',moviesURL)
req.addEventListener('load',() => {
    let movies = JSON.parse(event.currentTarget.responseText) // 
    
    let movieItems =  movies.Search.map(movie => {
        return `<div>
                    <h2>${movie.Title}</h2>
                    <img src='${movie.Poster}' />
                </div>`
    })

    movieList.innerHTML = movieItems.join('')
    
    //event is available automatically 
    console.log(movies.Search)
}) 

// make the actual request...
req.send() 