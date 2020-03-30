import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from '../components/Grid';
import ProductList from '../components/ProductList';
import CategoryMenu from '../components/CategoryMenu';

const Home = () =>
    <Container fluid>
        <Row>
            <CategoryMenu />
            <ProductList />
        </Row>
    </Container>;
export default Home;
