import React, { useState, useEffect } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import { useUserAuth } from '../../../context/UserAuthContext'
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"
import {BiRupee} from "react-icons/bi"
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/dashboard.css"

const Dashboard = () => {

    const [viewData, setViewData] = useState([])

    const location = useLocation();
    const navigate = useNavigate();

    const fetchProducts = async () => {
        const data = await fetch("http://localhost:4000/products")
        const parsedData = await data.json()
        setViewData(parsedData)
        console.log("data: ", viewData)
    }

    const DeleteProduct = async (id) => {
        console.log("id received", id)
        const data=await fetch(`http://localhost:4000/products/${id}`, {method:'delete'})
        toast.success('Product Deleted successfully!!', {autoClose:3000})
        const response =await data.json();
        fetchProducts();
    }

    const getProductById = async(id)=>{
        const data=await fetch(`http://localhost:4000/products/${id}`)
         const response =await data.json();
         console.log(response)
         navigate("/updateproduct" , {state:{product:response}})
        // console.log("id", id)
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <Container className='mt-4'>
            <h2>Welcome Admin</h2>
             <div className='prod-container'>
                {
                    viewData.map((item) => {
                        return(
                            <Card className='card-prod'>
                               <Card.Img variant="top" src={item.prodUrl} className="card-img"/>
                                <Card.Body>
                                <Card.Title style={{fontWeight:"300",fontSize:"20px"}}>{item.prodName}</Card.Title>
                                <Card.Text>
                                    Category : {item.prodCat}
                                </Card.Text>
                                <Card.Text>
                                    Description : {item.description}
                                </Card.Text>
                                <Card.Text className='price'>
                                    Price : <BiRupee /> {item.prodPrice}
                                </Card.Text>
                                <Button variant="danger" className='prod-button ' onClick={() => DeleteProduct(item.id)}>Delete <AiOutlineDelete /></Button>
                                <Button variant="success" className='prod-button' onClick={() => getProductById(item.id)}>Edit <AiOutlineEdit /></Button>
                                </Card.Body>
                          </Card>
                        )
                    })
                }
             </div>
             <ToastContainer />
        <br />
    </Container>
    )
}

export default Dashboard