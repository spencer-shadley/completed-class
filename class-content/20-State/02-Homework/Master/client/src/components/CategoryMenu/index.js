import { Col, Container, Row } from '../Grid';
import API from '../../utils/API';
import React from 'react';
import Search from '../Search';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useStoreContext } from '../../utils/GlobalState';

function CategoryMenu() {
    const [store, dispatch] = useStoreContext();
    const category = [`CAMERAS`, `TELEVISION`, `COMPUTERS`, `MONITORS`];
    const handleClick = search => {
        API.getProducts(search)
            .then(results => {
                dispatch({
                    type: UPDATE_PRODUCTS,
                    products: results.data
                });
            })
            .catch(err => console.error(err));
    };
    return (
        <Container>
            <Row>
                <Col size="sm-12">
                    <Search />
                    {store.loading ?
                        <a href="# " className="navbar-brand ml-auto">Loading...</a>
                        :
                        <></>
                    }
                </Col>
                <div className="category-heading">Pick a category:</div>
                {category.map(item =>
                    <Col size="md-2" key={item}>
                        <button
                            className="category-item"
                            onClick={() => {
                                handleClick(item);
                            }}
                        >
                            {item}
                        </button>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default CategoryMenu;
