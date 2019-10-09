var path = require("path");
var router = require("express").Router();

// "/notes" responds with the notes.html file
router.get("/notes", function(req, res) {
  
});

// All other routes respond with the index.html file
router.get("*", function(req, res) {
  
});

module.exports = router;
