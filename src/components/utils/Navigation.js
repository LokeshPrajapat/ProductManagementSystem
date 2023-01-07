import React from 'react'
import { Nav, Navbar, NavItem, Container, Button, Form } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineLogin, AiOutlineHome } from "react-icons/ai";
import "../styles/Navbar.css";


const Navigation = () => {
    return (
        <div>
            <Navbar bg="light" expand="xxl">
                <Container fluid>
                    <Navbar.Brand className="logo">
                        <h2>Product store /</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-xxl`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
                        placement="end"
                    >
                    <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-2">
                                <Nav.Link href="/" className="nav-links">Home <AiOutlineHome /></Nav.Link>
                                <NavDropdown
                                    title="Products"
                                    id={`offcanvasNavbarDropdown-expand-xxl`}>
                                    <NavDropdown.Item href="#action4">
                                        Men's Collection
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">
                                        Women's Collection
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">
                                        Electronics
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">

                                        Grocery

                                    </NavDropdown.Item>

                                </NavDropdown>

                                <Nav.Link href="/" className="nav-links">Cart <AiOutlineShoppingCart /></Nav.Link>

                                <Nav.Link href="/login" className="nav-links">SignIn <AiOutlineLogin /></Nav.Link>

                            </Nav>

                        </Offcanvas.Body>

                    </Navbar.Offcanvas>

                </Container>

            </Navbar>

        </div>
    )
}

export default Navigation