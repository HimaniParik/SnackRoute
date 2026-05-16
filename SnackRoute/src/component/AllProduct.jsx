import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { AddToCart } from "../features/CartSlice";

const AllProduct = () => {
  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();

  return (
    <MDBContainer>
      <MDBRow className='mb-3 mt-4'>
        {
          items.map((item) => (
            <MDBCol md='4' className='mb-3' key={item.id}>
              <MDBCard>
                <MDBRipple className='bg-image hover-overlay'>
                  <MDBCardImage
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />
                </MDBRipple>

                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardTitle>₹{item.price}</MDBCardTitle>

                  <MDBCardText>
                    {item.desc}
                  </MDBCardText>

                  <MDBBtn
                    className='form-control btn btn-danger'
                    onClick={() => dispatch(AddToCart(item))}
                  >
                    Add to Cart
                  </MDBBtn>

                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))
        }
      </MDBRow>
    </MDBContainer>
  )
}

export default AllProduct