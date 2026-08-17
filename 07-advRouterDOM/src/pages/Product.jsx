import React from 'react'
import { Link } from 'react-router-dom'


const Product = () => {
  return (
    <div>
      <div>
        <Link to='men'>Mens</Link>
        <Link to='women'>Women</Link>
      </div>
      <h1>
        Products
      </h1>
    </div>
  )
}

export default Product