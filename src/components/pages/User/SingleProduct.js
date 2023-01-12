import React, { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Context from "../../../context/Context";

const SingleProduct = ({ product }) => {
  const navigate = useNavigate();
  const data = useContext(Context);
  const cart = data.state.cart;
  const dispatch = data.dispatch;
  const [cartproduct,setCartproduct]=useState()
  return (
    <>
    <Card style={{ width: "18rem",marginTop:"20px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.productName}</Card.Title>
        <Card.Subtitle>Price: {product.price}</Card.Subtitle>
        <Card.Text>
          {/* Some quick example text to build on the card title and make up the
        bulk of the card's content. */}
          {/* {product.description} */}
        </Card.Text>
        {/* {product.instock} */}
        {/* <Card.Text>{product.fastDelivery ? "FAST DELIVERY" : ""}</Card.Text> */}
        <Card.Text>
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
              onClick={(e) => {e.preventDefault();

                dispatch({ type: "Add_To_Cart", payload: product });
                console.log(cart);
              }}
            >
              {product.instock == 0 ? "Out of Stock" : "Add To Cart"}
            </Button>
          )}
        </Card.Text>
        {/* <div class="space-ten"></div>
                <div class="btn-ground text-center">
                    <button type="button" class="btn btn-primary"><i class="fa fa-shopping-cart"></i> Add To Cart</button>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#product_view"><i class="fa fa-search"></i> Quick View</button>
                </div>
                <div class="space-ten"></div>    */}
                <Button className="btn btn-primary" onClick={()=>{navigate("/viewdescription" ,{state:{product}})}}>Quick View</Button>
      </Card.Body>
    </Card>
    
</>
  )
}

export default SingleProduct;
