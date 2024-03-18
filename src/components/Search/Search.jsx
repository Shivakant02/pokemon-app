// import React from 'react'
import './search.css'


function Search() {
    return(
      <div >
          <input
          // id="search-pokemon"
          className=' w-1/2 outline-emerald-600 m-10 '
              
              type="text"
              placeholder="Which Pokemon you are looking for?"
          />
    </div>
  )
}

export default Search