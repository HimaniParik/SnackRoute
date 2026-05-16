import { useState } from 'react'
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css'
import Navbar from './component/Navbar';
import AllProduct from './component/AllProduct'
import CartPage from './component/CartPage'
import Footer from './component/Footer';
function App() {
  
    
  return (
    <div>
       <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<AllProduct/>}/>
          <Route path="/cart"element={<CartPage/>}/>
        </Routes>
        <Footer/>
       </Router>
    </div>
  )
}

export default App
