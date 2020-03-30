import { Container, Row } from '../components/Grid';
import CategoryMenu from '../components/CategoryMenu';
import ProductList from '../components/ProductList';
import React from 'react';

const Home = () =>
    <Container fluid>
        <Row>
            <CategoryMenu />
            <ProductList />
        </Row>
    </Container>;
export default Home;
