import {MyState} from './context/MyState';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserDashboard from './components/pages/User/UserDashboard';
import Header from './components/pages/User/Header';
import Cart from './components/pages/User/Cart';
import Bill from './components/pages/User/Bill';
import ViewDescription from './components/pages/User/ViewDescription';
import BillPreview from './components/pages/User/BillPreview';
import { Container, Row, Col, Nav } from "react-bootstrap";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Logout from "./components/Logout";
import Navigation from "./components/pages/utils/Navigation"
import Footer from "./components/pages/utils/Footer"
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Admin/Dashboard";
import 'react-toastify/dist/ReactToastify.css';
import UpdateProduct from "./components/pages/Admin/UpdateProduct";
import AddNew from "./components/pages/Admin/AddNew";



// function App() {
//   return (
//     <div className="App">
//       {/* Mystate is context so all the data is 
//       available in the componetst inside the Mystate tag */}
//       {/* <Bill /> */}
//       <MyState>
    
//       <BrowserRouter>
//       <Header />
      
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/cart" element={<Cart />}></Route>
//         <Route path="/viewdescription" element={<ViewDescription />}></Route>
//         <Route path="/billpreview" element={<BillPreview />}></Route>
//       </Routes>
//       </BrowserRouter>
//       </MyState>
      
//     </div>

function App() {
  return (
      <div className="App">
        <MyState>
        <UserAuthContextProvider>
          <Navigation /> 
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/signup" element={<Signup/>}/>
            <Route path="/userDashboard" element={<UserDashboard />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/viewDescription" element={<ViewDescription />}></Route>
            <Route path="/billPreview" element={<BillPreview />}></Route>
            <Route exact path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route exact path="/updateProduct" element={<ProtectedRoute><UpdateProduct/></ProtectedRoute>} />
            <Route exact path="/add" element={<ProtectedRoute><AddNew /></ProtectedRoute>} />
          </Routes>
          <Footer />
        </UserAuthContextProvider>
        </MyState>
      </div>
  );
}

export default App;