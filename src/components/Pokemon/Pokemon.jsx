// import React from 'react'

function Pokemon({name,url}) {
  return (
      <div>
          <div>{name}</div>
          <div>
              <img src={url} alt="" />
          </div>
    </div>
  )
}

export default Pokemon