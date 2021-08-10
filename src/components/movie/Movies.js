import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import './Movies.css';
require('dotenv').config();


export default function Movies() {

  var apiKey = process.env.REACT_APP_API_KEY;
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://imdb-api.com/en/API/Top250Movies/${apiKey}`, requestOptions)
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
