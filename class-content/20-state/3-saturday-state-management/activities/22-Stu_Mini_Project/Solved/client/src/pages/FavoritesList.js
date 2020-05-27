import { LOADING, REMOVE_FAVORITE, UPDATE_FAVORITES } from '../utils/actions';
import { List, ListItem } from '../components/List';
import React, { useEffect } from 'react';
import DeleteBtn from '../components/DeleteBtn';
import { Link } from 'react-router-dom';
import { useStoreContext } from '../utils/GlobalState';

const FavoritesList = () => {
    const [state, dispatch] = useStoreContext();

    const getFavorites = () => {
        dispatch({ type: LOADING });
        dispatch({ type: UPDATE_FAVORITES });
    };

    const removeFromFavorites = id => {
        dispatch({
            type: REMOVE_FAVORITE,
            _id: id
        });
    };

    useEffect(() => {
        getFavorites();
    }, []);

    return (
        <div className="container mb-5 mt-5">
            <h1 className="text-center">Here&apos;s All of Your Favorite Posts</h1>
            {state.favorites.length ?
                <List>
                    <h3 className="mb-5 mt-5">Click on a post to view in detail</h3>
                    {state.favorites.map(post =>
                        <ListItem key={post._id}>
                            <Link to={`/posts/${ post._id}`}>
                                <strong>
                                    {post.title} by {post.author}
                                </strong>
                            </Link>
                            <DeleteBtn onClick={() => removeFromFavorites(post._id)} />
                        </ListItem>
                    )}
                </List>
                :
                <h3>You haven&apos;t added any favorites yet!</h3>
            }
            <div className="mt-5">
                <Link to="home">Back to home</Link>
            </div>
        </div>
    );
};

export default FavoritesList;
