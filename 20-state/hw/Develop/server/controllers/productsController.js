const db = require(`../models`);
const axios = require(`axios`);
// Defining methods for the productsController
module.exports = {
    findAll: (req, res) => {
        if (req.query.q === ``) {
            req.query.q = `iphone`;
        }
        axios
            .get(
                // eslint-disable-next-line max-len
                `https://api.bestbuy.com/v1/products(longDescription=${req.query.q}*)?format=json&apiKey=${process.env.BEST_BUY_API_KEY}`
            )
            .then(results => {
                console.log(`RESULTS: `, results.data);
                res.json([...results.data.products]);
            })
            .catch(err => console.log(err));
    },
    findByClass: (req, res) => {
        if (req.query.q === ``) {
            req.query.q = `mobile`;
        }
        console.log(`REQ CONTR: `, req.query.q);
        res.json(true);
    // axios
    //   .get(
    //     `https://api.bestbuy.com/v1/products(departmentId=
    //     ${req.params.id})?format=json&apiKey=${process.env.BEST_BUY_API_KEY}`
    //   )
    //   .then(results => {
    //     console.log("RESULTS!!!: ", results.data);
    //     res.json([...results.data.products]);
    //   })
    //   .catch(err => console.log(err));
    },
    findById: (req, res) => {
        axios
            .get(
                // eslint-disable-next-line max-len
                `https://api.bestbuy.com/v1/products(productId=${req.params.id})?format=json&apiKey=${process.env.BEST_BUY_API_KEY}`
            )
            .then(results => {
                res.json(results.data.products[0]);
            })
            .catch(err => console.log(err));
    },
    create: (req, res) => {
        db.Product.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: (req, res) => {
        db.Product.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: (req, res) => {
        db.Product.findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
