import { Col, Container, Row } from '../components/Grid';
import { FormBtn, Input, TextArea } from '../components/Form';
import { List, ListItem } from '../components/List';
import React, { useEffect, useState } from 'react';
import DeleteBtn from '../components/DeleteBtn';
import Jumbotron from '../components/Jumbotron';

function Books() {
    // Initialize books as an empty array
    // eslint-disable-next-line no-unused-vars
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    }, []);
    // Add code here to get all books from the database and store them using setBooks

    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <Jumbotron>
                        <h1>What Books Should I Read?</h1>
                    </Jumbotron>
                    <form>
                        <Input name="title" placeholder="Title (required)" />
                        <Input name="author" placeholder="Author (required)" />
                        <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
                        <FormBtn>Submit Book</FormBtn>
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
