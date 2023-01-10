import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Context from '../context/Context'
import Home from './Home'
import Rating from './Rating'

const Filter = () => {
    const[rating,setRating]=useState()
    const data=useContext(Context)
    const{byStock,byFastDelivery,byRating,sort,bySearchQuery}=data.productState
    const productDispatcher=data.productDispatcher
    console.log(data.productState)
  return (
    <div className="filters">
    <span className="title">Filter Products</span>
    <span>
        <Form.Check
            inline
            label="Ascending"
            name="group1"
            type="radio"
            id={`inline-1`}
            onChange={()=>{
                productDispatcher({type:'Sort_By_Price',payload:'lowToHigh'})
            }}
            checked={sort==='lowToHigh'?true:false}
        />
    </span>
    <span>
        <Form.Check
            inline
            label="Descending"
            name="group1"
            type="radio"
            id={`inline-2`}
            onChange={()=>{
                productDispatcher({type:'Sort_By_Price',payload:'highToLow'})
            }}
            checked={sort==='highToLow'?true:false}
        />
    </span>
    <span>
        <Form.Check
            inline
            label="Include Out of Stock"
            name="group1"
            type="checkbox"
            id={`inline-3`}
            onChange={()=>{
                productDispatcher({type:'Filter_By_Stock'})
            }}
            checked={byStock}
        />
    </span>
    <span>
        <Form.Check
            inline
            label="Fast Delivery Only"
            name="group1"
            type="checkbox"
            id={`inline-4`}
            onChange={()=>{
                productDispatcher({type:'Filter_By_Delivery'})
            }}
            checked={byFastDelivery}
        />
    </span>
    <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>

        <Rating rating={byRating} clicker={(i)=>
        {
            productDispatcher({type:'Filter_By_Rating',payload:i+1})
        }}/>

    </span>

    <Button
        variant="light"
        onClick={()=>{
            productDispatcher({type:'Clear_Filters'}
            )
        }}   
    >
        Clear Filters

    </Button>

</div>  
  )
}

export default Filter