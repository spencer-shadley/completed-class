import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import {
  REMOVE_FROM_CART,
  SET_CURRENT_PRODUCT,
  ADD_TO_CART,
  UPDATE_CART
} from "../utils/actions";
import { useIdb } from "../utils/hooks";

const Detail = props => {
  const [state, dispatch] = useStoreContext();
  
  const [shoppingCart, setShoppingCart] = useIdb(0, [
    ...state.cart,
    state.currentProduct
  ]);

  useEffect(() => {
    dispatch({ type: UPDATE_CART, cart: shoppingCart });
    console.log(state.cart);
    API.getProduct(props.match.params.id)
      .then(res => {
        dispatch({ type: SET_CURRENT_PRODUCT, product: res.data });
      })
      .catch(err => console.log(err));
  }, []);

  const addToCart = () => {
    console.log(state.currentProduct);
    dispatch({
      type: ADD_TO_CART,
      product: state.currentProduct
    });
    setShoppingCart(state.currentProduct);
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: state.currentProduct._id
    });
  };

  // console.log(state.cart);
  const imgStyle = {
    backgroundcolor: 'blue',
    border: 'red border 3px',
    padding: '0 10px 0 10px',
    minHeight: '100px',
    minWidth: '30%',
    maxWidth: '300px',

  };

  const rowStyle = {
    backgroundColor: 'white',
    margin: '0 10px 0 40px',
    // minHeight: '100%',
    maxWidth: '80%'
  };

  const cardBody = {
    backgroundColor: 'white',
    margin: '0 10px 0 40px',
    // maxWidth: '170%',
  };

  const cardStyle = {
    minWidth: '240px',
    // margin: '0 10px 0 40px',
    // maxWidth: '170%',
  };

  const buttonStyle = {
    minWidth: '100%',
    borderRadius: '5px',
    // backgroundColor: 'black',
    // marginLeft: '30%',
    textAlign: 'center',
  };

  return (
    <>
      {state.currentProduct && state.cart ? (
        <Container fluid >
          <Row>
            <Col size="md-4 ">
              <Link to="/">← Back to Products</Link>
            </Col>
          </Row>
          <br />
          <br />
          <div style={rowStyle} className="right">
          <Row >
            <Col size="md-4 ">
              <div className="card align-items-center" style={cardStyle}>
                <br />
                <br />
                <img className="product-image" style={imgStyle} src={state.currentProduct.largeImage} alt="Card image cap" />
                <br />
                <br />
            {state.cart.indexOf(state.currentProduct) !== -1 ? (
              <button className="btn btn-danger" style={buttonStyle} onClick={removeFromCart}>
                <i className="fa fa-remove fa-lg"></i>
              </button>
            ) : (
                <button className="btn btn-success" style={buttonStyle} onClick={addToCart}>
                  <i className="fa fa-shopping-cart fa-lg"></i>
                </button>
            )}
              </div>
            </Col>
            
            <Col size="md-7" >
              <div className="card-body" style={cardBody}>
                <h5 class="card-title">{state.currentProduct.name}</h5>
                <br />

                <p className="card-text">{state.currentProduct.shortDescription}</p>
              </div>
            </Col>
          </Row>
          </div>
     
          <br />
          <Row>
          </Row>
        </Container>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};

export default Detail;
