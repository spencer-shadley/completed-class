import React, { useState, useEffect, useRef } from "react";
// import { useStoreContext } from "../../utils/GlobalState";
import { Container } from "../Grid";
import SearchForm from "../SearchForm";
// import API from "../../utils/API";
// import { UPDATE_PRODUCTS } from "../../utils/actions";

function Search() {
  // const [state, dispatch] = useStoreContext();
  // const inputRef = useRef();

  // const [search, setSearch] = useState("");
  // const [error, setError] = useState("");

  // When the component mounts, update the title to be Wikipedia Searcher
  // useEffect(() => {
  //   document.title = "Bamazon!";

  //   if (!search) {
  //     return;
  //   }

  //   // API.searchTerms(search)
  //   //   .then(res => {
  //   //     if (res.data.length === 0) {
  //   //       throw new Error("No results found.");
  //   //     }
  //   //     if (res.data.status === "error") {
  //   //       throw new Error(res.data.message);
  //   //     }
  //   //     setArticleState({
  //   //       title: res.data[1],
  //   //       description: res.data[2][0],
  //   //       url: res.data[3][0]
  //   //     });
  //   //   })
  //   //   .catch(err => setError(err));
  // }, [search]);

  // const handleInputChange = event => {
  //   setSearch(event.target.value);
  // };

  // const handleFormSubmit = event => {
  //   event.preventDefault();
  //   dispatch({
  //     type: UPDATE_PRODUCTS,
  //     products: []
  //   })
  // };
  return (
      <div>
        <Container >
          <p className="text-center"></p>
          {/* <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 10 }}>
            {error}
          </Alert> */}
          <SearchForm />
        </Container>
      </div>
  );
}

export default Search;
