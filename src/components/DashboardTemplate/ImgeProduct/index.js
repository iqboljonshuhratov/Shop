import React from 'react'
import { useParams } from 'react-router-dom'
import getProducts from '../../../data/products';
import ImgeProductWrapper from './ImageProductWrapper'

export default function ImageProduct() {
   const params = useParams()
  //  console.log(params.id);

   const products = getProducts();
   const product = products.find((item)=> item.id == params.id);

  //  console.log(product);

  if(product) return <ImgeProductWrapper src={product.img}/>
  else return <h1>Not Found Product By Id</h1>
}
