import React, { useEffect } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { getCartTotal,AddToCart } from '../features/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
const Navbar = () => {
  const{cart,totalQuantity}=useSelector((state)=>state.allCart)

  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getCartTotal())
  },[cart])
  return (
    <MDBNavbar light id="navbar" style={{
      position: "sticky",
      top: "0",
      zIndex: "1000"
    }}>
      <MDBContainer fluid>
        <MDBNavbarBrand id="brandName">
          <i className="bi bi-fork-knife"></i>SnackRoute<i className="bi bi-fork-knife"></i>
        </MDBNavbarBrand>

        <div className='d-flex gap-3'>
          <Link to="/">
            <span className='navbarButton'>All Products</span>
          </Link>

          <Link to="/cart">
            <span className='navbarButton'>
              <i className="bi bi-cart-fill"></i>{totalQuantity}
            </span>
          </Link>
        </div>

      </MDBContainer>
    </MDBNavbar>
  )
}

export default Navbar