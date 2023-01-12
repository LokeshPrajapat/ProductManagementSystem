import React, { useState, useEffect } from 'react'
import { Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import "../../styles/UpdateProduct.css"

const UpdateProduct = () => {

  const [product, setProduct] = useState({})

  const location = useLocation();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    // console.log(location.state.product);
    setProduct(location.state.product);
  }, []);

  const updateDetils = async (e, item) => {
    e.preventDefault();
    console.log("item: ", item)
    const requestOptions = {
      'method': 'PUT',
      'body': JSON.stringify({
        prodName: item.prodName,
        prodCat: item.prodCat,
        prodUrl: item.prodUrl,
        prodPrice: item.prodPrice,
        instock: item.instock,
        fastDelivery: item.fastDelivery,
        description:item.description,
        rating: item.rating
      }),
      'headers': { "Content-type": "application/json" }
    }
    const data = await fetch(`http://localhost:4000/products/${item.id}`, requestOptions)
    const response = await data.json();
    // toast.success("Product Updated Success")
    console.log("item: ", item)
    navigate("/dashboard")
  }

  return (
    <div className="container py-5">
      <div className="shadow card border-0 p-3 mx-auto" style={{ width: '30rem', backgroundColor:"#e7ab3c" }}>
        <form>
          <h3 className="form-header nav-background">Update Product</h3>
          <div className="form-group ">
            <label htmlFor="username">Product Name </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product Name"
              name="prodName"
              defaultValue={product.prodName}
              onChange={onChangeHandler}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="category">Product Category: </label>
            <input
              type="text"
              name="prodCat"
              className="form-control"
              placeholder="Enter Product Category"
              defaultValue={product.prodCat}
              onChange={onChangeHandler}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="text">Product Price: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product Price in Rs."
              name="prodPrice"
              defaultValue={product.prodPrice}
              onChange={onChangeHandler}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="text">Product Description: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product Description"
              name="description"
              defaultValue={product.description}
              onChange={onChangeHandler}
            />
          </div>
          <br />
          <div className="form-group" style={{heigth:"4rem"}}>
            <label htmlFor="text">Product Image Url: </label>
            <textarea
              rows={3}
              type="text"
              className="form-control"
              placeholder="Enter Product Image Url"
              defaultValue={product.prodUrl}
              name="prodUrl"
              onChange={onChangeHandler}
            />
          </div>
          <br />
          <div className="form-group">
            <label>Product Fast Delivery </label>
              <Form.Select className="form-select" name="fastDelivery" value={product.fastDelivery} onChange={onChangeHandler}>
              <option value="true">true</option>
              <option value="false">false </option>
              </Form.Select>
          </div>
          <br />

          <div className="form-group">
            <label>Rating </label>
              <Form.Select className="form-select" name="rating" value={product.rating} onChange={onChangeHandler}>
              <option value="1">1</option>
              <option value="2">2 </option>
              <option value="3">3 </option>
              <option value="4">4 </option>
              <option value="5">5 </option>
              </Form.Select>
          </div>
          <br />
        </form>
        <button className="button btn-update " type="submit" onClick={(e) => updateDetils(e, product)}>Update</button>
        <br />
        <button className='button btn-cancel'><Link to="/dashboard" style={{color:"#3D405B", textDecoration:"none"}}>Cancel</Link></button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default UpdateProduct