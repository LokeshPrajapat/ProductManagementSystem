import React, { useContext, useEffect, useState } from 'react'
import { Card, Col, Image, ListGroup, ListGroupItem, Row,Form, Button } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import { Navigate, useNavigate } from 'react-router-dom'
import Context from '../../../context/Context'
import BillPreview from './BillPreview'
import Rating from './Rating'

const Cart = () => {
    const data=useContext(Context)
    const navigate=useNavigate();
    const cart=data.state.cart;
    const dispatch=data.dispatch;
    const[total,setTotal]=useState()
    //acc is previous value and curr is current item in cart
    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price)*curr.qty, 0))
    })
  return (
    <div className='home'>
        <div className='productContainer'>
         <ListGroup>
            {cart.map((prod)=>{
                return <ListGroupItem key={prod.id}>
                    <Row>
                        <Col><Image src={prod.image} fluid rounded/></Col>
                        <Col><span>{prod.productName}</span></Col>
                        <Col><span>{prod.price}</span></Col>
                        <Col><Rating rating={prod.rating}/></Col>
                        <Col>
                            <Form.Control as="select" value={prod.qty} 
                            onChange={(e)=>{dispatch({type:'Change_Cart_Item_Qty',payload:{id:prod.id,qty:e.target.value}})}}>
                                {[...Array(5)].map((_,index)=>{
                                    return <option key={index+1} >{index+1}</option>
                                })}

                            </Form.Control>
                        </Col>
                        <Col>
                        <Button variant="light" onClick={()=>{dispatch({type:'Remove_From_Cart',payload:prod.id})}}>
                            <AiFillDelete fontSize='20px'/>
                        </Button>
                        </Col>
                    </Row>
                </ListGroupItem>
            })}
         </ListGroup>   
        </div>
        <div className='filters summary'>
            <span className='title'>Subtotal of {cart.length} Items</span>
            <span style={{fontSize:20,fontFamily:'monospace'}}>Total is  {total}</span>
            {cart.length? <Button className="row" 
            onClick={()=>{navigate("/billpreview")}}
             variant='success'>Click To Preview Bill</Button>:"There is Nothing in the Cart"}
           
        </div>
    </div>
  )
}

export default Cart