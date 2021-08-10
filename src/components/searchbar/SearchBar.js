import React from 'react';
import './SearchBar.css';

export default function SearchBar() {
  return (
    <form className="search">
      <input className="search__bar" type="search" id="search" placeholder="Search"  />
      <button type="button" id="button">Search</button>
    </form>
  )
}
