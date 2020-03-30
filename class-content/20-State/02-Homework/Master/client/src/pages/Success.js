import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';

const Success = () =>
    <Container fluid>
        <Row>
            <Col size="md-12">
                <Jumbotron>
                    <h1>Success!</h1>
                    <h2>Thank you for your purchase!</h2>
                </Jumbotron>
            </Col>
        </Row>
    </Container>;
export default Success;
