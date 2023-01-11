<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import MyState from './context/MyState';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Cart from './components/Cart';
import Bill from './components/Bill';
import ViewDescription from './components/ViewDescription';
import BillPreview from './components/BillPreview';



function App() {
  return (
    <div className="App">
      {/* Mystate is context so all the data is 
      available in the componetst inside the Mystate tag */}
      {/* <Bill /> */}
      <MyState>
    
      <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/viewdescription" element={<ViewDescription />}></Route>
        <Route path="/billpreview" element={<BillPreview />}></Route>
      </Routes>
      </BrowserRouter>
      </MyState>
      
    </div>
=======
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Logout from "./components/Logout";
import Navigation from "./components/utils/Navigation"
import Footer from "./components/utils/Footer"
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Admin/Dashboard";
import 'react-toastify/dist/ReactToastify.css';
import UpdateProduct from "./components/pages/Admin/UpdateProduct";
import AddNew from "./components/pages/Admin/AddNew";

function App() {
  return (
    // <Container style={{ width: "400px" }}>
    //   <Row>
    //     <Col>
    //       {/* <UserAuthContextProvider> */}
    //        <Navigation/>
    //         <Routes>
    //           {/* <Route path="/logout" element={
    //               <ProtectedRoute>
    //                 <Logout />
    //               </ProtectedRoute>
    //             }
    //           /> */}
    //           <Route path="/" element={<Home />} />
    //           {/* <Route path="/signup" element={<Signup />} /> */}
    //         </Routes>
    //         <Footer/>
    //       {/* </UserAuthContextProvider> */}
    //     </Col>
    //   </Row>
    // </Container>
      <div className="App">
        <UserAuthContextProvider>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route exact path="/updateproduct" element={<ProtectedRoute><UpdateProduct/></ProtectedRoute>} />
            <Route exact path="/add" element={<ProtectedRoute><AddNew /></ProtectedRoute>} />
          </Routes>
          <Footer />
        </UserAuthContextProvider>
      </div>
>>>>>>> 4952b72e35ebcd363a8b6e4ec88735327097d856
  );
}

export default App;