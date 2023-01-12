import React, { useContext, useEffect } from 'react'
import Context from '../../../context/Context'
import Filter from './Filter';
import SingleProduct from './SingleProduct'
import "../../styles/UserStyles.css"
import { MyNewState } from '../../../context/MyState';

const UserDashboard = () => {
    const data = useContext(Context)
    useEffect(()=>{data.fetchProduct()},[])

    console.log(data,"product")

    const products=data.product;

    console.log("products: ", products)
    let {byStock,byFastDelivery,byRating,sort,bySearchQuery}=data.productState

    const transformedProducts=()=>{
      let sortedProducts=products
      if(sort.length){
        sortedProducts=sortedProducts.sort((a,b)=>{
          return sort==='lowToHigh'?a.price-b.price:b.price-a.price
      })
      }
      if(byFastDelivery){
        sortedProducts=sortedProducts.filter((p)=>{
          return p.fastDelivery===true
        })
      }
      if(byRating){
        sortedProducts=sortedProducts.filter((p)=>{
          return p.rating>=byRating
        })
      }
      sortedProducts=sortedProducts.filter((p)=>{
        return p.productName.toLowerCase().includes(bySearchQuery.toLowerCase())
      })
      return sortedProducts
    }
  return (
    <div className='home'>
      <Filter/>       
        <div className='productContainer'>
        {
        //  data.state.products.map((product)=>{
        //        return <SingleProduct key={product.id} product={product}/>
        transformedProducts().map((product)=>{
          return <SingleProduct key={product.id} product={product}/>
        })}
        </div>
    </div>
  )
}

export default UserDashboard;