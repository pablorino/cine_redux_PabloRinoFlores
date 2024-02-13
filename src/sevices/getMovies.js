const url='https://api.themoviedb.org/3/movie/popular?api_key=b832c9c49c982617d9a04e8280b922b3'

export const getMoviesPop=()=>{
    return fetch(url)
}
const urlSearch=`https://api.themoviedb.org/3/search/movie?api_key=b832c9c49c982617d9a04e8280b922b3`

export const searchMovies=(id)=>{
    return fetch(`${urlSearch}&query=${id}`)
}

export const searchMovie=(id)=>{
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b832c9c49c982617d9a04e8280b922b3`)
}
