import React from 'react'
import './SearchBar.css'

const SearchBar = ({changeQuery}) => {


  return (
    <div className='search-bar'>
      <input type='text' 
        placeholder='Search...' 
        onChange={ e => changeQuery(e.target.value)}/>
    </div>
  )
}

export default SearchBar
