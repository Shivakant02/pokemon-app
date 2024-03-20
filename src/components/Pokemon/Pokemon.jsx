// import React from 'react'
import './Pokemon.css'
function Pokemon({name,url}) {
  return (
      <div className='pokemon'>
          <div className='poke-name'>{name}</div>
          <div>
              <img className='poke-image' src={url} alt="" />
          </div>
    </div>
  )
}

export default Pokemon