// import React from 'react'
import { Link } from 'react-router-dom'
import './Pokemon.css'
function Pokemon({name,url,id}) {
  return (
    <Link to={`/pokemon/${id}`} className='poke-wrapper'>
      <div className='pokemon'>
          
            <div className='poke-name'>{name}</div>
          
        <img className='poke-image' src={url} alt="" />
      
        </div>
       </Link>
  )
}

export default Pokemon