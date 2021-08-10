import React from 'react';
import './Movie.css';

export default function Movie({title, id, imDbRating, imDbRatingCount, image}) {
  return (
    <div className="movie" key={id}>
      <img className="movie__image" src={image} alt="" />
      <div className="movie__ratings">
        <p className="movie__title">{title} </p>
        <p className="movie__rating">Rating: {imDbRating} </p>
        <p className="movie__count"> Count: {imDbRatingCount} </p>
      </div>
     
   
    </div>
  )
}
