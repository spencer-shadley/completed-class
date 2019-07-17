import React, { useRef } from "react";
import API from "../../utils/API";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import { Row, Col } from "../Grid";

import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm() {
  const [state, dispatch] = useStoreContext();
  const inputRef = useRef();

  const handleFormSubmit = event => {
    event.preventDefault();
    console.log(inputRef);
    const query = inputRef.current.value;
    if (!query) return;
    API.getProducts(query).then(results => {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: results.data
      });
    });

    inputRef.current.value = "";
  };

  return (
    <form className="search" onSubmit={handleFormSubmit}>
      <div className="form-group">
        <Row>
          <Col size="md-12">
        <label htmlFor="language">Search Term:</label>
        <input
          name="term"
          list="term"
          type="text"
          ref={inputRef}
          className="form-control"
          placeholder="Type search term"
          id="term"
        />
        <button type="submit">Go</button>
        </Col>
        </Row>
      </div>
    </form>
  );
}

export default SearchForm;
