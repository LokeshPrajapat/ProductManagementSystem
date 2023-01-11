import React, { useContext } from 'react'
import {  Container } from 'reactstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FaShoppingCart} from 'react-icons/fa'
import { Badge, Button, Dropdown, FormControl } from 'react-bootstrap';
import Context from '../context/Context';
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Header = () => {
  const data=useContext(Context)
  const cart=data.state.cart;
  const dispatch=data.dispatch;
  const productDispatcher=data.productDispatcher;
  return (
    <Navbar bg="dark" variant="dark" expands="lg">
      <Container>
        <Navbar.Brand href="/">Products Management System</Navbar.Brand>
        <Navbar.Text className='search'>
          <FormControl style={{ width: 500 }} placeholder="Search product" onChange={(e)=>
          {
            productDispatcher({type:"Filter_By_Search_Query",payload:e.target.value})
           console.log(e.target.value)
          }}></FormControl>
        </Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className='me-auto'>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="22px"></FaShoppingCart>
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{minWidth:270}}>
             
             {cart.map((prod)=>(
              <span className='cartitem' key={prod.id}>
                <img src={prod.image} className='cartItemImg'/>
                <div className='cartItemDetail'>
                  <span>{prod.productName}</span>
                  <span>{prod.price}</span>
                  </div>
                  <AiFillDelete fontSize='20px' style={{cursor:'pointer'}}
                  onClick={()=>{dispatch({type:'Remove_From_Cart',payload:prod.id})}}/>
          
                 </span> 
             ))}
             
              {cart.length?
              <Link to="/cart">
              <Button style={{width:"95%",margin:'2px'}} >View Cart</Button>
              </Link>
              :<span>Cart Is Empty</span>}
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Bills">Bills</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header