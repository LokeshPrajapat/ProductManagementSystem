import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
} from "reactstrap";
import {BiRupee} from 'react-icons/bi'
import Context from "../../../context/Context";
import { Button, Form } from "react-bootstrap";


const ViewDescription = () => {
  const location = useLocation();
  const product=location.state.product;
  const data = useContext(Context);
  const dispatch = data.dispatch;
  const cart=data.state.cart;
  return (
    // <div>ViewDescription {location.state.product.productName}</div>
    <>
    <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
    <div className="modal-dialog">
        <div className="modal-content">
            <div  style={{alignContent:"center"}}>
                <h2 className="modal-title" >{product.productName}</h2>
            </div>
            <div className="modal-body">
                <div className="col">
                    <div style={{float:"left"}}>
                        <img src={product.image}  className="img-responsive"/>
                    </div>
                    <div className="row-md-6 product_content" style={{padding:"60px"}}>
                        <h4>Product Id: <span></span></h4>
                        <div className="rating">
                            <span className="glyphicon glyphicon-star"></span>
                            <span className="glyphicon glyphicon-star"></span>
                            <span className="glyphicon glyphicon-star"></span>
                            <span className="glyphicon glyphicon-star"></span>
                            <span className="glyphicon glyphicon-star"></span>
                            (10 reviews)
                        </div>
                        <p>{product.description}</p>
                        <h3 className="cost">New price : <BiRupee/>{product.price} <strike style={{TextDecoder:"gray"}}><BiRupee/> {product.price-1000}</strike></h3>
                        <div className="row">
                            <div className="row-md-4 col-sm-6 col-xs-12">
                                <select className="form-control" name="select">
                                    <option value="" selected="">Color</option>
                                    <option value="black">Black</option>
                                    <option value="white">White</option>
                                    <option value="gold">Gold</option>
                                    <option value="rose gold">Rose Gold</option>
                                </select>
                            </div>
                            <div className="row-md-4 col-sm-6 col-xs-12">
                                <select className="form-control" name="select">
                                    <option value="">Capacity</option>
                                    <option value="">16GB</option>
                                    <option value="">32GB</option>
                                    <option value="">64GB</option>
                                    <option value="">128GB</option>
                                </select>
                            </div>
                            {/* <div className="col-md-4 col-sm-12">
                                <select className="form-control" name="select">
                                    <option value="" selected="">QTY</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div> */}
                            
                        </div>
                        <div className="space-ten"></div>
                        <div className="btn-ground">
                        <br/>
                            {/* <button type="button" className="btn btn-primary"  onClick={() => {
                dispatch({ type: "Add_To_Cart", payload: product });
              }}><FaShoppingCart color="white" fontSize="22px"/>Add To Cart</button> */}
               {cart.some((p) => p.id === product.id) ? (
            <Button
              variant="success"
              onClick={() => {
                dispatch({ type: "Remove_From_Cart", payload: product.id });
                console.log(cart);
              }}
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              disabled={product.instock == 0}
              variant={product.instock == 0 ? "danger" : "info"}
              onClick={() => {
                dispatch({ type: "Add_To_Cart", payload: product });
                console.log(cart);
              }}
            >
              {product.instock == 0 ? "Out of Stock" : "Add To Cart"}
            </Button>
          )}

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</>
  )
}

export default ViewDescription;
