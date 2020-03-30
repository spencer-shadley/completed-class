import {
    ADD_ALL_TO_CART,
    ADD_PRODUCT,
    ADD_TO_CART,
    LOADING,
    REMOVE_FROM_CART,
    REMOVE_PRODUCT,
    SET_CURRENT_PRODUCT,
    UPDATE_CART,
    UPDATE_PRODUCTS
} from './actions';
import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
    case SET_CURRENT_PRODUCT:
        return {
            ...state,
            currentProduct: action.product,
            loading: false
        };

    case UPDATE_PRODUCTS:
        return {
            ...state,
            products: [...action.products],
            loading: false
        };

    case ADD_PRODUCT:
        return {
            ...state,
            products: [action.product, ...state.products],
            loading: false
        };

    case REMOVE_PRODUCT:
        return {
            ...state,
            products: state.products.filter(product => product._id !== action._id)
        };

    case ADD_TO_CART:
        return {
            ...state,
            cart: [action.product, ...state.cart],
            loading: false
        };

    case ADD_ALL_TO_CART:
        return {
            ...state,
            cart: [...action.cart, ...state.cart],
            loading: false
        };

    case UPDATE_CART:
        return {
            ...state,
            cart: [...state.cart],
            loading: false
        };

    case REMOVE_FROM_CART:
        return {
            ...state,
            cart: state.cart.filter(product => product.productId !== action.productId)
        };

    case LOADING:
        return {
            ...state,
            loading: true
        };

    default:
        return state;
    }
};

const StoreProvider = ({ value, ...props }) => {
    console.log(value);
    const [state, dispatch] = useReducer(reducer, {
        products: [],
        currentProduct: {
            _id: 0,
            title: ``,
            body: ``,
            author: ``
        },
        cart: [],
        loading: false
    });

    return <Provider value={[state, dispatch]} {...props} />;
};
StoreProvider.propTypes = {
    value: PropTypes.array
};

const useStoreContext = () => useContext(StoreContext);

export { StoreProvider, useStoreContext };
