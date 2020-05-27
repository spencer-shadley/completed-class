import axios from 'axios';

export default {
    // Gets all posts
    getPosts() {
        return axios.get(`/api/posts`);
    },
    // Gets the post with the given id
    getPost(id) {
        return axios.get(`/api/posts/${ id}`);
    },
    // Deletes the post with the given id
    deletePost(id) {
        return axios.delete(`/api/posts/${ id}`);
    },
    // Saves a post to the database
    savePost(postData) {
        return axios.post(`/api/posts`, postData);
    }
};
