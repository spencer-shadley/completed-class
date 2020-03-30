import './styles.css';
import { Col, Container, Row } from '../Grid';
import { LOADING, UPDATE_PRODUCTS } from '../../utils/actions';
import React, { useEffect } from 'react';
import API from '../../utils/API';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';

function ProductList() {
    const [state, dispatch] = useStoreContext();

    const getProducts = () => {
        dispatch({ type: LOADING });
        API.getProducts()
            .then(results => {
                dispatch({
                    type: UPDATE_PRODUCTS,
                    products: results.data
                });
            })
            .catch(err => console.error(err));
    };

    useEffect(() => {
        getProducts();
        console.log(`PRODUCTS: `, state);
    }, []);

    return (
        <div>
            <h5 className="titleHeader">Products:</h5>
            {state.products.length ?
                <Container fluid>
                    <Row>
                        {state.products.map(product =>
                            <Col size="md-3" key={`col-${ product.productId}`}>
                                <ProductItem
                                    key={product.productId}
                                    _id={product.productId}
                                    thumbnailImage={product.largeImage}
                                    name={product.name}
                                    shortDescription={product.shortDescription}
                                    salePrice={product.salePrice}
                                />
                            </Col>
                        )}
                    </Row>
                </Container>
                :
                <h3>You haven&apos;t added any products yet!</h3>
            }
            <div className="mt-5"></div>
        </div>
    );
}

export default ProductList;
