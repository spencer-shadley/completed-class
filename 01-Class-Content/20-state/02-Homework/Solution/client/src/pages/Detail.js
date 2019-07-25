import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import {
  REMOVE_FROM_CART,
  SET_CURRENT_PRODUCT,
  ADD_TO_CART,
  UPDATE_CART,
  ADD_ALL_TO_CART
} from "../utils/actions";

import { idbPromise } from "../utils/hooks";

const Detail = props => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    dispatch({ type: UPDATE_CART });
    API.getProduct(props.match.params.id)
      .then(res => {
        dispatch({ type: SET_CURRENT_PRODUCT, product: res.data });
        if (state.cart.length === 0) {
          idbPromise("best", "cart", "get").then(results => {
            dispatch({ type: ADD_ALL_TO_CART, cart: results });
          });
        }
      })
      .catch(err => console.log(err));
  }, []);

  const addToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      product: state.currentProduct
    });
    idbPromise("best", "cart", "put", state.currentProduct);
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      productId: state.currentProduct.productId
    });
    idbPromise("best", "cart", "delete", state.currentProduct);
  };

  return (
    <>
      {state.currentProduct && state.cart ? (
        <Container fluid>
          <Row>
            <Col size="md-2">
              <Link to="/">← Back to Products</Link>
            </Col>
          </Row>
          <br />
          <Row>
            <Col size="md-2 ">
              <div className="card">
                <br />
                <img
                  className="card-img-left"
                  src={state.currentProduct.largeImage}
                  alt="Card image cap"
                />
                <br />
                {state.cart.filter(p => {
                  return p.productId === state.currentProduct.productId;
                }).length === 0 ? (
                  <button className="btn btn-success" onClick={addToCart}>
                    <i className="fa fa-shopping-cart fa-lg" />
                  </button>
                ) : (
                  <button className="btn btn-danger" onClick={removeFromCart}>
                    <i className="fa fa-remove fa-lg" />
                  </button>
                )}
              </div>
            </Col>
            <Col size="md-4">
              <div className="card-body">
                <h5 class="card-title">{state.currentProduct.name}</h5>
                <p className="card-text">
                  {state.currentProduct.shortDescription}
                </p>
              </div>
            </Col>
          </Row>
          <br />
          <Row />
        </Container>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};

export default Detail;
