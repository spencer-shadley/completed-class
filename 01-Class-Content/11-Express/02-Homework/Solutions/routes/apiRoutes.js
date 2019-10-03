const router = require("express").Router();
const fs = require("fs");

// GET "/api/notes" responds with all notes from the database
router.get("/notes", function(req, res) {
  fs.readFile("db/db.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    res.json(JSON.parse(jsonString));
  });
});

router.post("/notes", ({ body }, res) => {
  const rawdata = fs.readFileSync("db/db.json");
  const parsedata = JSON.parse(rawdata);
  const newObj = parsedata.concat(body);
  const string = JSON.stringify(newObj);
  fs.writeFile("db/db.json", string, function(err) {
    if (err) console.log(err);
    res.json(string);
  });
});


// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete("/notes/:title", function(req, res) {
  const rawdata = fs.readFileSync("db/db.json");
  const parsedata = JSON.parse(rawdata);
  const newData = parsedata.filter(obj => {
    return obj.title !== req.params.title;
  });
  fs.writeFile("db/db.json", JSON.stringify(newData), function(err) {
    if (err) console.log(err);
    res.json(newData);
  });
});

module.exports = router;
