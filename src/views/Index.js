import React from 'react';
import Movies from '../components/movie/Movies';
import SearchBar from '../components/searchbar/SearchBar';


export default function Index() {
  
  return (
    <div>
      <SearchBar/>
      <Movies/>
    </div>
  )
}
