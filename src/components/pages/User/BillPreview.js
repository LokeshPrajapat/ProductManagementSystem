import React, { useContext, useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBTypography,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { useLocation } from 'react-router-dom';
import Context from '../../../context/Context';
import { Button } from 'reactstrap';


 const BillPreview = () => {
    const data=useContext(Context)
    const cart=data.state.cart;
    const [userBill,setUserBill]=useState(cart);
    const[total,setTotal]=useState();
    const date= Date().toLocaleString();
    //acc is previous value and curr is current item in cart
    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price)*curr.qty, 0))
    },[cart])
        //  [
        //   {
        //     "s.no":5,
        //   "productName":"Samsung remote",
        //   "price":5000,
        //   "image":"https://images.samsung.com/is/image/samsung/in-full-hd-tv-te50fa-ua43te50fakxxl-frontblack-231881877?$650_519_PNG$",
        //   "instock":10,
        //   "fastDelivery":true,
        //   "description":"This is the best tv",
        //   "rating":3
        //   },
        //   {
        //     "s.no":5,
        //   "productName":"Samsung remote",
        //   "price":5000,
        //   "image":"https://images.samsung.com/is/image/samsung/in-full-hd-tv-te50fa-ua43te50fakxxl-frontblack-231881877?$650_519_PNG$",
        //   "instock":10,
        //   "fastDelivery":true,
        //   "description":"This is the best tv",
        //   "rating":3
        //   },
        //   {
        //     "s.no":5,
        //   "productName":"Samsung remote",
        //   "price":5000,
        //   "image":"https://images.samsung.com/is/image/samsung/in-full-hd-tv-te50fa-ua43te50fakxxl-frontblack-231881877?$650_519_PNG$",
        //   "instock":10,
        //   "fastDelivery":true,
        //   "description":"This is the best tv",
        //   "rating":3
        //   },
        //   {
        //     "s.no":5,
        //   "productName":"Samsung remote",
        //   "price":5000,
        //   "image":"https://images.samsung.com/is/image/samsung/in-full-hd-tv-te50fa-ua43te50fakxxl-frontblack-231881877?$650_519_PNG$",
        //   "instock":10,
        //   "fastDelivery":true,
        //   "description":"This is the best tv",
        //   "rating":3
        //   },
        //   {
        //     "s.no":5,
        //   "productName":"Samsung remote",
        //   "price":5000,
        //   "image":"https://images.samsung.com/is/image/samsung/in-full-hd-tv-te50fa-ua43te50fakxxl-frontblack-231881877?$650_519_PNG$",
        //   "instock":10,
        //   "fastDelivery":true,
        //   "description":"This is the best tv",
        //   "rating":3
        //   }
        // ]
         
         
    
    const clickHandler=async()=>{
    console.log("hello") 
    const requestOptions={
        'method':"POST",
        'body':JSON.stringify(
         {
        
        invoice_no: "201906-28",
        balance: total,
        company: "MANTRIX",
        email: "susanafuentes@mantrix.com",
        phone: "+1 (872) 588-3809",
        address:"922 Campus Road, Drytown, Wisconsin, 1986",
        billing_date: date,
        items:userBill
        }),    
        'headers': { "Content-type": "application/json" }
         }
        const data = await fetch(`http://localhost:5000/Bills`, requestOptions)
    }
  
  return (
    <MDBContainer className="py-5">
      <MDBCard className="p-4">
        <MDBCardBody>
          <MDBContainer className="mb-2 mt-3">
            <MDBRow className="d-flex align-items-baseline">
              <MDBCol xl="9">
                <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
                  Invoice &gt; &gt; <strong>ID: 
                  </strong>
                </p>
              </MDBCol>
              <MDBCol xl="3" className="float-end">
                <MDBBtn
                  color="light"
                  ripple="dark"
                  className="text-capitalize border-0"
                >
                  <MDBIcon fas icon="print" color="primary" className="me-1" />
                  Print
                </MDBBtn>
                <MDBBtn
                  color="light"
                  ripple="dark"
                  className="text-capitalize border-0 ms-2"
                >
                  <MDBIcon
                    far
                    icon="file-pdf"
                    color="danger"
                    className="me-1"
                  />
                  Export
                </MDBBtn>
                <hr />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <MDBContainer>
            <MDBCol md="12" className="text-center">
              <MDBIcon
                fab
                icon="mdb"
                size="4x"
                className="ms-0 "
                style={{ color: "#5d9fc5" }}
              />
              
            </MDBCol>
          </MDBContainer>
          <MDBRow>
            <MDBCol xl="8">
              <MDBTypography listUnStyled>
                <li className="text-muted">
                  To: <span style={{ color: "#5d9fc5" }}>User Name</span>
                </li>
                <li className="text-muted">Street, City</li>
                <li className="text-muted">State, Country</li>
                <li className="text-muted">
                  <MDBIcon fas icon="phone-alt" /> 123-456-789
                </li>
              </MDBTypography>
            </MDBCol>
            <MDBCol xl="4">
              <p className="text-muted">Invoice</p>
              <MDBTypography listUnStyled>
                <li className="text-muted">
                  <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                  <span className="fw-bold ms-1">ID:</span>{}
                </li>
                <li className="text-muted">
                  <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                  <span className="fw-bold ms-1">Creation Date: </span>{new Date().toLocaleString() + ""}

                </li>
                <li className="text-muted">
                  <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                  <span className="fw-bold ms-1">Status:</span>
                  <span className="badge bg-warning text-black fw-bold ms-1">
                    Unpaid
                  </span>
                </li>
              </MDBTypography>
            </MDBCol>
          </MDBRow>
          <MDBRow className="my-2 mx-1 justify-content-center">
            <MDBTable striped borderless>
              <MDBTableHead
                className="text-white"
                style={{ backgroundColor: "#84B0CA" }}
              >
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Description</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Unit Price</th>
                  <th scope="col">Amount</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
              {
                    cart.map((p,index)=>{
                    return  <tr>
                        <th scope="row">{index+1}</th>
                        <td>{p.productName}</td>
                        <td>{p.qty}</td>
                        <td>{p.price}</td>
                        <td>{p.price * p.qty}</td>
                      </tr>
                    })
            } 
            
              </MDBTableBody>
            </MDBTable>
          </MDBRow>
          <MDBRow>
            <MDBCol xl="8">
              <p className="ms-3">
                Add additional notes and payment information
              </p>
            </MDBCol>
            <MDBCol xl="3">
              <MDBTypography listUnStyled>
                <li className="text-muted ms-3">
                  <span class="text-black me-4">SubTotal</span>{total}
                </li>
                <li className="text-muted ms-3 mt-2">
                  <span class="text-black me-4">Tax(15%)</span>{total*0.015 }
                </li>
              </MDBTypography>
              <p className="text-black float-start">
                <span className="text-black me-3"> Total Amount</span>
                <span style={{ fontSize: "25px" }}>₹ {total+(0.015*total)}</span>
              </p>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow>
            <MDBCol xl="10">
              <p>Thank you for your purchase</p>
            </MDBCol>
            <MDBCol xl="2">
              <Button
                // className="text-capitalize"
                //style={{ backgroundColor: "#60bdf3" }}
                onClick={clickHandler}
              >
                Pay Now
              </Button>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
 
  );

        }
export default BillPreview