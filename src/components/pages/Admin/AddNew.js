import React,{useState} from 'react'
import { Form } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify'
import "../../styles/UpdateProduct.css"

const AddNew = () => {

  const [addProduct, setAddProduct] = useState({
        prodName:"",
        prodCat: "",
        prodUrl: "",
        prodPrice:"",
        instock: "",
        fastDelivery: "",
        description:"",
        rating: ""
  });

  const [success, setSuccess] = useState(false);

  const changeHandler = (e) => {
    setAddProduct({ ...addProduct, [e.target.name]: e.target.value });
  };

  const onFormSubmit = async(e) => {
      e.preventDefault();

      var randomId = new Date().getUTCMilliseconds().toString();

      fetch("http://localhost:4000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       id:randomId,
       prodName: addProduct.prodName,
       prodCat: addProduct.prodCat,
       prodUrl:addProduct.prodUrl,
       prodPrice:addProduct.prodPrice,
       instock: addProduct.instock,
       fastDelivery: addProduct.fastDelivery,
       description:addProduct.description,
       rating: addProduct.rating
      }),
    })
      .then((res) => {
        res.json();
        console.log("data added!!", res);
        toast.success("Product Added Successfully!!")
        setSuccess(true)
        setTimeout(()=>{
          setSuccess(false); 
          window.location.reload(true);
        } , 3000)
        
      })
      .catch((err) => {
        console.log("error: ", err.message);
      });
  }

  return (
    <div className="container py-5">
      <div className="card border-0 shadow p-3 mx-auto" style={{ width: '30rem' }}>
        <form>
          <h3 className="form-header nav-background">Add Product</h3>
          <div className="form-group ">
            <label htmlFor="username">Product Name </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product Name"
              name="prodName"
              value={addProduct.prodName}
              onChange={changeHandler}
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
              value={addProduct.prodCat}
              onChange={changeHandler}
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
              value={addProduct.prodPrice}
              onChange={changeHandler}
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
              value={addProduct.description}
              onChange={changeHandler}
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
              name="prodUrl"
              value={addProduct.prodUrl}
              onChange={changeHandler}
            />
          </div>
          <br />
          <div className="form-group">
            <label>Product Fast Delivery </label>
              <Form.Select className="form-select" name="fastDelivery" value={addProduct.fastDelivery} onChange={changeHandler}>
              <option value="true">true</option>
              <option value="false">false </option>
              </Form.Select>
          </div>
          <br />

          <div className="form-group">
            <label>Rating </label>
              <Form.Select className="form-select" name="rating" value={addProduct.rating} onChange={changeHandler}>
              <option value="1">1</option>
              <option value="2">2 </option>
              <option value="3">3 </option>
              <option value="4">4 </option>
              <option value="5">5 </option>
              </Form.Select>
          </div>
          <br />
          <button className="button btn btn-success" type="submit" onClick={(e) => onFormSubmit(e)}>Add Product</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default AddNew