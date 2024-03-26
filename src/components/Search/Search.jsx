// import React from 'react'
import useDebounce from '../../hooks/useDebounce'
import './search.css'


function Search({ updateSearchTerm }) {
  const debounceUpdateSearch=useDebounce((e)=>updateSearchTerm(e.target.value))
    return(
      <div className='SearchBox' >
          <input
          id="search-pokemon"
          
              
              type="text"
          placeholder="Which Pokemon are you  looking for?"
          onChange={debounceUpdateSearch}
          />
    </div>
  )
}

export default Search