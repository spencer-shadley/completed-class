import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import Search from "../Search";
import { Row, Col } from "../Grid";
import { UPDATE_PRODUCTS } from "../../utils/actions";

import API from "../../utils/API";
import "./styles.css";

function CategoryMenu() {
  const [store, dispatch] = useStoreContext();
  const category = ["CAMERAS", "TELEVISION", "COMPUTERS", "MONITORS"];
  // const query = search => {};
  const handleClick = search => {
    API.getProducts(search)
      .then(results => {
        console.log("CategoryMenu Res: ", results)
        dispatch({
          type: UPDATE_PRODUCTS,
          products: results.data
        })
      })
      .catch(err => console.error(err));
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Row>
        <Col size="sm-12">
          <Search />
          {store.loading ? (
            <a className="navbar-brand ml-auto">Loading...</a>
          ) : (
            <></>
          )}
        </Col>
      { category.map( item => 
        <Col size="md-3">
          <div onClick={() => {
            handleClick(item)
          }}>
            {item}
          </div>
        </Col>
      )}
      </Row>
    </nav>
  );
}

export default CategoryMenu;
