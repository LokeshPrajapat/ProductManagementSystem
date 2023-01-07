import React from 'react'
import { Row, Col } from "react-bootstrap";
import bannerOne from "../assets/banner-1.jpeg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import carousel1 from "../assets/carousel1.jpg"
import carousel2 from "../assets/carousel2.jpg"
import carousel3 from "../assets/carousel3.jpg"
import carousel4 from "../assets/carousel4.jpg"
import "../styles/Home.css";


const Home = () => {

    const dataList = [
        carousel1,
        carousel2,
        carousel3,
        carousel4
    ]

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            {/*------------------ First Image ----------------------------*/}
            <div className="image-text">
                <div className="first-text">
                    <h1>
                        Select Your New <br /> Perfect Style
                    </h1>
                    <button className="shop-btn"> Shop Now</button>
                </div>
                <div className="first-img">
                    <img src={bannerOne} alt="watch" />
                </div>
            </div>
            {/* ----------------Benefits------------------------ */}
            <div className="benefit-items mx-3">
                <Row>
                    <Col md="4">
                        <div className="single-benefit">
                            <div className="sb-icon">
                                <img src={require("../assets/icon-1.png")} alt="" />
                            </div>
                            <div className="sb-text">
                                <h6>Free Shipping</h6>
                                <p>For all order over Rs. 999</p>
                            </div>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="single-benefit">
                            <div className="sb-icon">
                                <img src={require("../assets/icon-2.png")} alt="" />
                            </div>
                            <div className="sb-text">
                                <h6>Delivery On Time</h6>
                                <p>Fast delivery of goods</p>
                            </div>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="single-benefit">
                            <div className="sb-icon">
                                <img src={require("../assets/icon-3.png")} alt="" />
                            </div>
                            <div className="sb-text">
                                <h6>Secure Payment</h6>
                                <p>100% secure payment</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <br />
            {/*-------------- Featured Category -----------------*/}
            <div className="feature-container container-2">
                <div className="feature-header">
                    <h2 className="feature-heading">Featured Categories</h2>
                    <span className="btn-container">
                    </span>
                </div>
                <div className="feature-body">
                    <div className="card card-basic">
                        <div className="card-header">
                            <img className="img-responsive"
                                src={require("../assets/bannerThree.jpg")}
                                alt="card image"
                            />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Men's Clothing</h5>
                        </div>
                    </div>
                    <div className="card card-basic">
                        <div className="card-header">
                            <img
                                className="img-responsive"
                                src={require("../assets/bannerFour.jpg")}
                                alt="card image"
                            />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Women's Clothing</h5>
                        </div>
                    </div>
                    <div className="card card-basic">
                        <div className="card-header">
                            <img
                                className="img-responsive "
                                src={require("../assets/bannerFive.jpg")}
                                alt="card image"
                            />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Electronic</h5>
                        </div>
                    </div>
                    <div className="card card-basic">
                        <div className="card-header">
                            <img
                                className="img-responsive"
                                src={require("../assets/img-grocery.jpg")}
                                alt="card image"
                            />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Grocery</h5>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            {/* ---------------------Carousel------------------- */}
            <div style={{ padding: "5px 0px" }}>
                <Carousel responsive={responsive} removeArrowOnDeviceType={["mobile"]} autoPlay infinite>
                    {
                        dataList?.map((banner, index) => (
                            <div style={{ padding: "0px 15px" }} key={index + 1}>
                                <img style={{ width: "102%", cursor: "pointer" }} src={banner} alt="Advertisement banner" />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </>
    )
}

export default Home