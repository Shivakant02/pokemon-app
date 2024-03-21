// import React from 'react'
import './Pokemon.css'
function Pokemon({name,url,id}) {
  return (
    <div className='pokemon'>
      <a href={`pokemon/${id}`}>
          <div className='poke-name'>{name}</div>
         
      <img className='poke-image' src={url} alt="" />
      </a>
          
    </div>
  )
}

export default Pokemon