import React from 'react'

function Card() {

  const price = 10;
  return (
    <div className='card'>
        <p>Cotton socks</p>
        Price: ${price}
        <button className='button-4'>Add to Cart</button>
    </div>
  )
}

export default Card