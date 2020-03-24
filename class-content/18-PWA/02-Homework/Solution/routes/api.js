const router = require(`express`).Router();
const HttpStatus = require(`http-status-code`);

const Transaction = require(`../models/transaction.js`);

router.post(`/api/transaction`, ({ body }, res) => {
  Transaction.create(body)
    .then(dbTransaction => res.json(dbTransaction))
    .catch(err => res.status(HttpStatus.NOT_FOUND).json(err));
});

router.post(`/api/transaction/bulk`, ({ body }, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => res.json(dbTransaction))
    .catch(err => res.status(HttpStatus.NOT_FOUND).json(err));
});

router.get(`/api/transaction`, (req, res) => {
  Transaction.find({})
    .sort({ date: -1 })
    .then(dbTransaction => res.json(dbTransaction))
    .catch(err => res.status(HttpStatus.NOT_FOUND).json(err));
});

module.exports = router;
