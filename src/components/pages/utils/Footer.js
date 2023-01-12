import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import {GoLocation} from "react-icons/go"
import {BsTelephone} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi"
import { ImPinterest2 } from "react-icons/im"
import "../../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer-section">
            <Container>
                <Row>
                    <Col lg="4">
                        <div className="footer-left">
                            <div className="footer-logo">
                                <Link to="/" className="navbar-brand text-light">
                                    <span>product</span>-shop
                                </Link>
                            </div>
                            <ul>
                                <li>
                                    <GoLocation /> 60-49 Road 11378 Nairobi
                                </li>
                                <li>
                                    < BsTelephone />{" "}
                                    <a href="tel:+254 746792699">+254 746792699</a>
                                </li>
                                <li>

                                    < AiOutlineMail />{" "}

                                    <a href="mailto:dummyuser556@gmail.com">

                                        dummyuser556@gmail.com

                                    </a>

                                </li>

                            </ul>

                            <div className="footer-social">

                                <Link to="/">

                                    <FiFacebook />

                                </Link>

                                <Link to="/">

                                    <FiInstagram />

                                </Link>

                                <Link to="/">

                                    <FiTwitter />

                                </Link>

                                <Link to="/">

                                    <ImPinterest2 />

                                </Link>

                            </div>

                        </div>

                    </Col>

                    <Col lg="4">

                        <div className="footer-widget">

                            <h5>Sitemap</h5>

                            <ul>

                                <li>

                                    <Link to="/">Home</Link>

                                </li>

                                <li>

                                    <Link to="/">Contact</Link>

                                </li>

                                <li>

                                    <Link to="/">Shopping Cart</Link>

                                </li>

                                <li>

                                    <Link to="/">About Us</Link>

                                </li>

                            </ul>

                        </div>

                    </Col>

                    <Col lg="4">

                        <div className="newslatter-item">

                            <h5>Join Our Newsletter Now</h5>

                            <p>

                                Get E-mail updates about our latest shop and special offers.

                            </p>

                            <form action="#" className="subscribe-form">

                                <input type="email" placeholder="Enter Your Mail" />

                                <button className="btn">Subscribe</button>

                            </form>

                        </div>

                    </Col>

                </Row>

            </Container>

            <div className="copyright-reserved">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-12">

                            <div className="copyright-text">

                                Copyright © {new Date().getFullYear()} All rights reserved

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer