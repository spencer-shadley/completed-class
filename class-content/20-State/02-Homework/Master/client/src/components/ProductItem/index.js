import './style.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

function ProductItem({
    thumbnailImage,
    name,
    shortDescription,
    _id,
    salePrice
}) {
    return (
        <div className="productItemContainer">
            <Link to={`/products/${_id}`}>
                <img alt="thumbnail" className="productImage img-fluid" src={thumbnailImage} />
                <div className="productTitleContainer">
                    <p className="detailLink">{name}</p>
                </div>
            </Link>{` `}
            <div className="productDescriptionContainer">
                <span className="productPrice">${salePrice}</span>
                <p className="description">{shortDescription} </p>
            </div>
        </div>
    );
}
ProductItem.propTypes = {
    thumbnailImage: PropTypes.string,
    name: PropTypes.string,
    shortDescription: PropTypes.string,
    _id: PropTypes.string,
    salePrice: PropTypes.string
};

export default ProductItem;
