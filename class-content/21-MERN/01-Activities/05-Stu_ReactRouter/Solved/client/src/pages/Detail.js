import { BrowserRouter, Link } from 'react-router-dom';
import { Col, Container, Row } from '../components/Grid';
import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import PropTypes from 'prop-types';

function Detail(props) {
    const [book, setBook] = useState({});

    // When this component mounts, grab the book with the _id of props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    useEffect(() => {
        API.getBook(props.match.params.id)
            .then(res => setBook(res.data))
            .catch(err => console.error(err));
    }, [props.match.params.id]);

    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>
                            {book.title} by {book.author}
                        </h1>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col size="md-10 md-offset-1">
                    <article>
                        <h1>Synopsis</h1>
                        <p>{book.synopsis}</p>
                    </article>
                </Col>
            </Row>
            <Row>
                <Col size="md-2">
                    <Link to="/">← Back to Authors</Link>
                </Col>
            </Row>
        </Container>
    );
}
Detail.propTypes = {
    match: PropTypes.object
};

export default Detail;
