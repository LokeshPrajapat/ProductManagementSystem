import React from 'react'
import { Nav, Navbar, NavItem, Container, Button, Form } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineLogin, AiOutlineHome } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi"
import "../../styles/Navbar.css";
import { useUserAuth } from '../../../context/UserAuthContext';


const Navigation = () => {
    const { user, logOut, isAdmin } = useUserAuth();

    const navigate = useNavigate();
    console.log("is admin: ", isAdmin);

    const onClickLogout = async () => {
        try {
            await logOut();
            navigate("/");
            window.location.reload();
          } catch (error) {
            console.log(error.message);
          }
    }

    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand className="logo">
                    <h2>Product Store<FiShoppingBag /> </h2>
                </Navbar.Brand>
                <Nav className="ms-auto" >
                    {
                        isAdmin ? 
                         (
                            <>
                                <Nav.Link href="/dashboard" className='nav_links'><h5>Home</h5></Nav.Link>
                                <Nav.Link href="/add" className="nav_links"><h5>Add Product</h5></Nav.Link>
                            </>
                         )
                         :
                         (
                            <>
                                <Nav.Link href="/" className='nav_links'><h5>Home</h5></Nav.Link>
                                <Nav.Link href="/userDashboard" className="nav_links"><h5>Product</h5></Nav.Link>
                            </>
                         )
                         
                    }

                    {/*--------- Condition for logout button ------------*/}
                    {
                        user && user.email && isAdmin ?  
                            <Nav.Link href="/" className="nav_links" onClick={onClickLogout}><h5>SignOut<AiOutlineLogin /></h5></Nav.Link>
                          : 
                          <Nav.Link href="/login" className="nav_links"><h5>SignIn <AiOutlineLogin /></h5></Nav.Link>
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}
export default Navigation