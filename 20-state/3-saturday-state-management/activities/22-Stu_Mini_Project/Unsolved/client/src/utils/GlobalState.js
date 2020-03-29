// eslint-disable-next-line no-unused-vars
import React, { useReducer } from 'react';
// Don't forget to import all of your actions!

const reducer = (state, action) => {
    switch (action.type) {
    default:
        return state;
    }
};

// TODO: use the variables and remove the disable
// eslint-disable-next-line no-unused-vars
const StoreProvider = ({ value = [], ...props }) => {
    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useReducer(reducer, {});

    return `PROVIDER ELEMENT HERE`;
};

// eslint-disable-next-line no-empty-function
const useStoreContext = () => {};

export { StoreProvider, useStoreContext };
