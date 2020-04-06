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
export function RecipeListItem() {
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <Thumbnail src="http://img.recipepuppy.com/560556.jpg" />
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h3>Vegetable-Pasta Oven Omelet</h3>
                        <p>
                            Ingredients: &quot;tomato, onions, red pepper, garlic, olive oil,
                            zucchini, cream cheese, vermicelli, eggs, parmesan cheese, milk,
                            italian seasoning, salt, black pepper&quot;
                        </p>
                        <a
                            rel="noreferrer noopener"
                            target="_blank"
                            // eslint-disable-next-line max-len
                            href="http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=520763"
                        >
                            Go to recipe!
                        </a>
                    </Col>
                </Row>
            </Container>
        </li>
    );
}
