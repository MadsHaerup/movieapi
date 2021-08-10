import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import './Movies.css';

export default function FilteredMovies() {
  
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState([])

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://imdb-api.com/en/API/SearchMovie/k_944z9qbx${search}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setMovies(result.items)
        console.log("data",result);
      })
      .catch(error => console.log('error', error));
  }, [])

  console.log("movies",movies)

  return (
    <div className="movies">

      {movies.map((movie)=>(
        <Movie
        id = {movie.id}
        image = {movie.image}
        imDbRating = {movie.imDbRating}
        imDbRatingCount = {movie.imDbRatingCount}
        title = {movie.title}
        />
      ))}
      
    </div>
  )
}
