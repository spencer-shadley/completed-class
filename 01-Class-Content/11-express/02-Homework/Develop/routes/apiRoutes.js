const router = require("express").Router();

// GET "/api/notes" responds with all notes from the database
router.get("/notes", function(req, res) {
  
});

router.post("/notes", ({ body }, res) => {
  
});


// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete("/notes/:title", function(req, res) {
  
});

module.exports = router;
