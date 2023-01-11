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
  );
}

export default App;