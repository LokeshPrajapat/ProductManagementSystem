import React, { useState, useEffect } from 'react'
import { Container, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from "react-router-dom";
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
        prodPrice: item.prodPrice
      }),
      'headers': { "Content-type": "application/json" }
    }
    const data = await fetch(`http://localhost:5000/products/${item.id}`, requestOptions)
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
          <button className="button btn-update " type="submit" onClick={(e) => updateDetils(e, product)}>Update</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default UpdateProduct