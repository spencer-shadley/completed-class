import React, { useEffect, useRef } from "react";
import { Col, Row, Container } from "../Grid";
import ProductItem from "../ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import "./styles.css";

function ProductList() {
  const [state, dispatch] = useStoreContext();

  // const removePost = id => {
  //   API.deletePost(id)
  //     .then(() => {
  //       dispatch({
  //         type: REMOVE_POST,
  //         _id: id
  //       });
  //     })
  //     .catch(err => console.log(err));
  // };

  const getProducts = () => {
    dispatch({ type: LOADING });
    API.getProducts().then(results => {
      // console.log("RESULTS", results);
      dispatch({
        type: UPDATE_PRODUCTS,
        products: results.data
      })
      
    })
    .catch(err => console.error(err));
  };

  useEffect(() => {
    getProducts();
    console.log("PRODUCTS: ", state);
  }, []);

  return (
    <div>
      <h5 className="titleHeader">Welcome to Bamazon 2.0</h5>
      {/* <h5 className="mb-5 mt-5">Click on a product to view</h5> */}
      {state.products.length ? (
        <Container fluid>
          <Row>
            {state.products.map(product => (
              <Col size="md-3">
                <ProductItem
                  key={product.productId}
                  _id={product.productId}
                  thumbnailImage={product.largeImage}
                  name={product.name}
                  shortDescription={product.shortDescription}
                  salePrice={product.salePrice}
                />
              </Col>
            ))}
          </Row>
        </Container>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      <div className="mt-5">
        {/* <Link to="shopping_cart">View shopping cart</Link> */}
      </div>
    </div>
  );
}

export default ProductList;
