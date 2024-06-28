import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'

function ProductDetails() {

    const{id} = useParams();
    const [Product, setProduct] = useState(null)

    
    useEffect(() => {

        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then((res) => {
            setProduct(res)
        })

    },[])
  return (
    <>
    <div>ProductDetails</div>
    {Product?(
        <div>
        <img src={Product.thumbnail} alt={Product.title}/>
        <h3>{Product.title}</h3>
        <h3>${Product.price}</h3>
        <p>{Product.description}</p>
        </div>
    ) : (
        <p>loading...</p>

    )}
    </>
  )
}

export default ProductDetails