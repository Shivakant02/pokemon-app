// import React from 'react'
import './Pokemon.css'
function Pokemon({name,url}) {
  return (
      <div className='pokemon'>
          <div>{name}</div>
          <div>
              <img src={url} alt="" />
          </div>
    </div>
  )
}

export default Pokemon