import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export const ProdutDetail = () => {
  const param = useParams()
  const id = param.id.replace(':', '')
  const [product, setProduct] = useState({})
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(res => setProduct(res));
                
  }, [])

  console.log(product);
  return (
    <div>
      <h1>ProdutDetail</h1>
      <img width={'300px'} height={'300px'} src={product?.thumbnail} alt="" />
      <h4>{product?.title}</h4>
      <h4>{product?.price}</h4>
      <h4>{product?.category}</h4>
      <h4>{product?.description}</h4>
    </div>

  )
}
