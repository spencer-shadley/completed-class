const axios = require("axios");

const queryURL = "https://www.omdbapi.com/?t=The%20Matrix&apikey=trilogy";

axios.get(queryURL).then(function(res) {
  console.log(res.data);
});
