import { Col, Container, Row } from '../Grid';
import PropTypes from 'prop-types';
import React from 'react';
import Thumbnail from '../Thumbnail';

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function RecipeList({ children }) {
    return <ul className="list-group">{children}</ul>;
}
RecipeList.propTypes = {
    children: PropTypes.node
};

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function RecipeListItem({
    thumbnail = `https://placehold.it/300x300`,
    title,
    ingredients,
    href
}) {
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <Thumbnail src={thumbnail} />
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h3>{title}</h3>
                        <p>Ingredients: {ingredients}</p>
                        <a rel="noreferrer noopener" target="_blank" href={href}>
                            Go to recipe!
                        </a>
                    </Col>
                </Row>
            </Container>
        </li>
    );
}
RecipeListItem.propTypes = {
    href: PropTypes.string,
    ingredients: PropTypes.string,
    thumbnail: PropTypes.string,
    title: PropTypes.string
};
