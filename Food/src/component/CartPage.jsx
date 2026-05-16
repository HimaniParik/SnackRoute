import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { getCartTotal, increaseItemQuantity, decreaseItemQuantity, removeItem } from "../features/CartSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function PaymentMethods() {
  const { cart, totalQuantity, totalPrice } = useSelector((state) => (state.allCart))
  console.log(cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCartTotal())
  }, [cart])
  return (
    <section className="h-100 gradient-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center my-4">
          <MDBCol md="8">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0">
                  Cart - {cart.length} items
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                {cart.map((data) => (
  <MDBRow key={data.id} className="align-items-center mb-4">

    {/* IMAGE */}
    <MDBCol lg="3" md="12" className="mb-3 mb-lg-0">
      <MDBRipple className="bg-image rounded">
        <img src={data.img} className="img-fluid rounded" />
      </MDBRipple>
    </MDBCol>

    {/* TITLE + ACTION BUTTONS */}
    <MDBCol lg="5" md="6">
      <p className="mb-2 fw-bold">{data.title}</p>

      <div className="d-flex gap-2">

        {/* DELETE */}
        <MDBBtn
          color="primary"
          size="sm"
          style={{ width: "40px", height: "40px" }}
          onClick={() => dispatch(removeItem(data.id))}
        >
          <MDBIcon fas icon="trash" />
        </MDBBtn>

        {/* WISHLIST */}
        <MDBBtn
          color="danger"
          size="sm"
          style={{ width: "40px", height: "40px" }}
        >
          <MDBIcon fas icon="heart" />
        </MDBBtn>

      </div>
    </MDBCol>

    {/* QUANTITY + PRICE */}
    <MDBCol lg="4" md="6" className="text-center">

      <div className="d-flex justify-content-center align-items-center mb-2">

        <MDBBtn
          className="px-2"
          style={{ minWidth: "35px" }}
          onClick={() => dispatch(decreaseItemQuantity(data.id))}
        >
          <MDBIcon fas icon="minus" />
        </MDBBtn>

        <input
          value={data.quantity}
          readOnly
          className="form-control text-center mx-2"
          style={{ width: "60px" }}
        />

        <MDBBtn
          className="px-2"
          style={{ minWidth: "35px" }}
          onClick={() => dispatch(increaseItemQuantity(data.id))}
        >
          <MDBIcon fas icon="plus" />
        </MDBBtn>

      </div>

      <strong>₹{data.quantity * data.price}</strong>

    </MDBCol>

    <hr className="mt-4" />
  </MDBRow>
))}
              </MDBCardBody>
            </MDBCard>



            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody>
                <p>
                  <strong>We accept</strong>
                </p>
                <MDBCardImage className="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                  alt="Visa" />
                <MDBCardImage className="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express" />
                <MDBCardImage className="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard" />
                <MDBCardImage className="me-2" width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                  alt="PayPal acceptance mark" />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard className="mb-4">
              <MDBCardHeader>
                <MDBTypography tag="h5" className="mb-0">
                  Summary
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBListGroup flush>
                  <MDBListGroupItem
                    className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Total Quantity
                    <span>{totalQuantity}</span>
                  </MDBListGroupItem>

                  <MDBListGroupItem
                    className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>

                    </div>
                    <span>
                      <strong>₹{totalPrice}</strong>
                    </span>
                  </MDBListGroupItem>
                </MDBListGroup>

                <MDBBtn block size="lg">
                  Go to checkout
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section >
  );
}