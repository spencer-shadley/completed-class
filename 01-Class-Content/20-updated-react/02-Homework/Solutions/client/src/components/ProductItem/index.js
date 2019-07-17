import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ProductItem({
  thumbnailImage,
  name,
  shortDescription,
  _id,
  salePrice
}) {
  return (
    <div className="ProductItemContainer">
      <Link to={`/products/${_id}`}>
        <img className="ProductImage img-fluid" src={thumbnailImage} />
        <p className="Title">{name}</p>
      </Link>{" "}
      <span className="ProductPrice">${salePrice}</span>
      <p className="Description">{shortDescription} </p>
    </div>
  );
}

export default ProductItem;
