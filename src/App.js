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
  );
}

export default App;
