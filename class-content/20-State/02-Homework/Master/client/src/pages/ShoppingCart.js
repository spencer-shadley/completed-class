import Cart from '../components/Cart';
import { Container } from '../components/Grid';
import { Link } from 'react-router-dom';
import React from 'react';

function ShoppingCartPage() {
    return (
        <Container>
            <Cart />
            <div className="mt-5">
                <Link to="home">Back to home</Link>
            </div>
        </Container>
    );
}

export default ShoppingCartPage;
