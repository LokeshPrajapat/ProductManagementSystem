import React, {  useReducer, useState } from 'react'
import { cartReducer,productReducer } from './Reducer'
import Context from './Context'
const MyState = (props) => {
   // faker.seed(99)
    const[product,setProduct]=useState([])
    const[allbills,setBills]=useState([])
    //   [...Array(20)].map(()=>({
    //     id:faker.datatype.uuid(),
    //     productName:faker.commerce.productName(),
    //     price:faker.commerce.price(),
    //     image:'https://images.samsung.com/is/image/samsung/in-full-hd-tv-te50fa-ua43te50fakxxl-frontblack-231881877?$650_519_PNG$',
    //     instock:faker.random.numeric(),
    //     fastDelivery:faker.datatype.boolean(),
    //     rating:faker.random.numeric()
    //  }))
    
  //)
    //reducer returns the modified state
    const[state,dispatch]=useReducer(cartReducer,{products:product,cart:[]})
    const [productState,productDispatcher]=useReducer(productReducer,{
      byStock:false,
      byFastDelivery:false,
      byRating:0,
      sort:'',
      bySearchQuery:''
    })
    const fetchProduct=async()=>
    {
    const data=await fetch("http://localhost:5000/Products")
    const pasredData= await data.json()
    console.log(pasredData)
    setProduct(pasredData)
    }
    const fetchAllBills=async()=>
    {
      const data=await fetch("http://localhost:5000/Bills")
      const pasredData= await data.json()
    }
  return (
    <div>
        <Context.Provider value={{state,dispatch,productState,productDispatcher,fetchProduct,product}}>
            {props.children}
        </Context.Provider></div>
  )
}

export default MyState