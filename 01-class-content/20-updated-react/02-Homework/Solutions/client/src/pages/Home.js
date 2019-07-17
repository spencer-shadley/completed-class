import React from "react";
import { Col, Row, Container } from "../components/Grid";
// import CreatePostForm from "../components/CreatePostForm";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

const Home = () => {
  return (
    <Container fluid>
      <Row>
      <Col size="sm-12">
        <CategoryMenu />
        </Col>
        <Col size="sm-12">
        <ProductList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
