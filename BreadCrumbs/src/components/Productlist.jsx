import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Productlist() {
    
    const [Products, setProducts] = useState([])

    useEffect(() => {

        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((res) => {
            setProducts(res.products)
        })

    },[])
  return (
    <>
    <h2>Product List</h2>
    <div className='product-grid'>
        {
            Products?.map((product) => {
                return (
                <div className='product-card' key={product.id}>
                      <Link to={`/Products/${product.id}`}>
                      <img src={product.thumbnail} alt= {product.title}/>
                      <h3>{product.title}</h3>
                      <h3>${product.price}</h3>
                      </Link>
                    </div>
                );
            })
            
        }
    
    </div>

    </>

  )
}

export default Productlist