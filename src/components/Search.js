import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import '../styles/Search.css'

function Search() {
  const search = (e) => {
    e.preventDefaukt(); // stog page from refreshing
    
  }
  return (
    <div className='search'>
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input type="text" />
        <MicIcon />
      </div>
      <div className="search__buttons">
        <Button onClick={search} variant='outlined'>Google Search</Button>
        <Button variant='outlined'>I'm Feeling Lucky</Button>
      </div>
    </div>
  )
}

export default Search
