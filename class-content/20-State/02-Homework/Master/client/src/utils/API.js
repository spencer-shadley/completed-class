import axios from 'axios';
import data from '../data.json';

export default {
    // Gets all products
    getProducts(query = ``) {
        return axios.get(`http://localhost:3001/api/products?q=${ query}`);
    },
    // Gets the product with the given id
    getProduct(id) {
        return axios.get(`http://localhost:3001/api/products/${ id}`);
    },
    // Get category
    getClass(query) {
        return axios.get(`http://localhost:3001/api/products/category?q=${ query}`);
    },
    // Deletes the product with the given id
    deleteProduct(id) {
        return axios.delete(`http://localhost:3001/api/products/${ id}`);
    },
    // Saves a product to the database
    saveProduct(productData) {
        return axios.post(`http://localhost:3001/api/products`, productData);
    },

    // Gets a single user by id
    getUser: id => axios.get(`/api/users/${id}`),
    // sign up a user to our service
    signUpUser: (email, password) => axios.post(`api/users/signup`, {
        email,
        password
    }),
    searchTerms(query) {
        return data.filter(search => query === search.title);
    },
    searchCategory(query) {
        return data.filter(search => query === search.category);
    }
};
