import React, { useEffect } from "react";
import { Container, Row, Col } from "../components/Grid";

import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import {
  LOADING,
  UPDATE_CART,
  REMOVE_FROM_CART,
  ADD_ALL_TO_CART
} from "../utils/actions";
import { idbPromise } from "../utils/hooks";

const ShoppingCart = () => {
  const [state, dispatch] = useStoreContext();

  const getCart = () => {
    dispatch({ type: LOADING });
    dispatch({ type: UPDATE_CART });
  };

  const removeFromCart = product => {
    dispatch({
      type: REMOVE_FROM_CART,
      productId: product.productId
    });
    idbPromise("best", "cart", "delete", product);
  };

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach(item => {
      sum += item.salePrice;
    });
    return sum.toFixed(2);
  }

  useEffect(() => {
    if (state.cart.length === 0) {
      idbPromise("best", "cart", "get").then(results => {
        dispatch({ type: ADD_ALL_TO_CART, cart: results });
      });
    }
    getCart();
  }, []);

  return (
    <div className="container mb-5 mt-5">
      <h1 className="text-center">Shopping Cart</h1>
      {state.cart.length ? (
        <Container fluid>
          <h3 className="mb-5 mt-5">
            Click on an item in your cart to view in detail
          </h3>
          <table className="table table-hover table-condensed">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {state.cart.map(product => (
                <tr>
                  <td data-th="Product">
                    <Row>
                      <Col size="md-2">
                        <img
                          src={product.thumbnailImage}
                          alt="..."
                          className="img-responsive"
                        />
                      </Col>
                      <Col size="md-9">
                        <h4 className="nomargin">{product.name}</h4>
                        <p>{product.description}</p>
                      </Col>
                    </Row>
                  </td>
                  <td data-th="Price">{product.salePrice}</td>
                  <td data-th="Quantity">
                    <input
                      type="number"
                      className="form-control text-center"
                      placeholder="1"
                    />
                  </td>
                  <td className="actions" data-th="">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(product)}
                    >
                      <i className="fa fa-trash-o" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <Link className="btn btn-warning" to="/">
                    <i className="fa fa-angle-left" /> Continue Shopping
                  </Link>
                </td>
                <td colspan="2" className="hidden-xs" />
                <td className="hidden-xs text-center">
                  <strong>Total: {calculateTotal()}</strong>
                </td>
                <td>
                  <Link to="success" className="btn btn-success btn-block">
                    Purchase <i className="fa fa-angle-right" />
                  </Link>
                </td>
              </tr>
            </tfoot>
          </table>
        </Container>
      ) : (
        <h3>You haven't added anything to your cart yet!</h3>
      )}
      <div className="mt-5">
        <Link to="home">Back to home</Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
