import API from '../utils/API';
import Card from './Card';
import Col from './Col';
import Container from './Container';
import MovieDetail from './MovieDetail';
import PropTypes from 'prop-types';
import React from 'react';
import Row from './Row';
import SearchForm from './SearchForm';

class OmdbContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: {},
            search: ``
        };
    }

    searchMovies(query) {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-8">
                        <Card
                            heading={this.state.result.Title || `Search for a Movie to Begin`}
                        >
                            <MovieDetail
                                title={this.state.result.Title}
                                src={this.state.result.Poster}
                                director={this.state.result.Director}
                                genre={this.state.result.Genre}
                                released={this.state.result.Released}
                            />
                        </Card>
                    </Col>
                    <Col size="md-4">
                        <Card heading="Search">
                            <SearchForm
                                value={this.state.search}
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                            />
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default OmdbContainer;
