import { Container, Row, Col, Nav } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
// import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Logout from "./components/Logout";
import Navigation from "./components/utils/Navigation"
import Footer from "./components/utils/Footer"
import Home from "./components/pages/Home";

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
      <div>
        <UserAuthContextProvider>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />}/>
          </Routes>
          <Footer />
        </UserAuthContextProvider>
      </div>
  );
}

export default App;