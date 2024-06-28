import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {

    const [TrendingProducts, setTrendingProducts] = useState([])

    useEffect(() => {

        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((res) => {
            const slice = res.products.slice(0,5)
            setTrendingProducts(slice)
        })

    },[])
  return (
    <>
    <div>Home Page</div>
    <span>Trending Products !!</span>
    <div className='product-grid'>
        {
            TrendingProducts.map((product) => {
                return <div className='product-card' key={product.id}>
                      <Link to={`/Products/${product.id}`}>
                      <img src={product.thumbnail} alt= {product.title}/>
                      <h3>{product.title}</h3>
                      </Link>
                    </div>
            })
            
        }
        <Link to={"/Products"}>
        <button>View All Products</button>
        </Link>
    </div>

    </>

  )
}

export default Home