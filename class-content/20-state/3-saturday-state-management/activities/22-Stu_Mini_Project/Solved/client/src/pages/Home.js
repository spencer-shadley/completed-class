import { Col, Container, Row } from '../components/Grid';
import CreatePostForm from '../components/CreatePostForm';
import PostsList from '../components/PostsList';
import React from 'react';

const Home = () =>
    <Container fluid>
        <Row>
            <Col size="md-6">
                <CreatePostForm />
            </Col>
            <Col size="md-6 sm-12">
                <PostsList />
            </Col>
        </Row>
    </Container>;
export default Home;
