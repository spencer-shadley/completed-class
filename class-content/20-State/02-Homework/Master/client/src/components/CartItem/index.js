import { Col, Row } from '../Grid';
import PropTypes from 'prop-types';
import { REMOVE_FROM_CART } from '../../utils/actions';
import React from 'react';
import { idbPromise } from '../../utils/hooks';
import { useStoreContext } from '../../utils/GlobalState';

const CartItem = ({ item }) => {
    const [, dispatch] = useStoreContext();

    const removeFromCart = selectedItem => {
        dispatch({
            type: REMOVE_FROM_CART,
            productId: selectedItem.productId
        });
        idbPromise(`best`, `cart`, `delete`, selectedItem);
    };

    return (
        <tr>
            <td data-th="Product">
                <Row>
                    <Col size="md-2">
                        <img
                            src={item.thumbnailImage}
                            alt="..."
                            className="img-responsive"
                        />
                    </Col>
                    <Col size="md-9">
                        <h4 className="nomargin">{item.name}</h4>
                        <p>{item.description}</p>
                    </Col>
                </Row>
            </td>
            <td data-th="Price">{item.salePrice}</td>
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
                    onClick={() => removeFromCart(item)}
                >
                    <i className="fa fa-trash-o" />
                </button>
            </td>
        </tr>
    );
};
CartItem.propTypes = {
    item: PropTypes.object
};

export default CartItem;
