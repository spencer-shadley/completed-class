import { Col, Container, Row } from '../components/Grid';
import { FormBtn, Input, TextArea } from '../components/Form';
import { List, ListItem } from '../components/List';
import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import DeleteBtn from '../components/DeleteBtn';
import Jumbotron from '../components/Jumbotron';

function Books() {
    // Setting our component's initial state
    const [books, setBooks] = useState([]);
    const [formObject] = useState({});

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks();
    }, []);

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res => setBooks(res.data))
            .catch(err => console.error(err));
    }

    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <Jumbotron>
                        <h1>What Books Should I Read?</h1>
                    </Jumbotron>
                    <form>
                        <Input
                            name="title"
                            placeholder="Title (required)"
                        />
                        <Input
                            name="author"
                            placeholder="Author (required)"
                        />
                        <TextArea
                            name="synopsis"
                            placeholder="Synopsis (Optional)"
                        />
                        <FormBtn
                            disabled={!(formObject.author && formObject.title)}
                        >
                            Submit Book
                        </FormBtn>
                    </form>
                </Col>
                <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h1>Books On My List</h1>
                    </Jumbotron>
                    {books.length ?
                        <List>
                            {books.map(book =>
                                <ListItem key={book._id}>
                                    <a href={`/books/${ book._id}`}>
                                        <strong>
                                            {book.title} by {book.author}
                                        </strong>
                                    </a>
                                    <DeleteBtn />
                                </ListItem>
                            )}
                        </List>
                        :
                        <h3>No Results to Display</h3>
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default Books;
