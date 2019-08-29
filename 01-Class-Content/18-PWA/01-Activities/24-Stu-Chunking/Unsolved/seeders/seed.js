var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/imageperformance",
  { useNewUrlParser: true }
);

var imageSeed = [
  {
    description: "Day At The Library",
    image: "/assets/images/adriana-velasquez-110184-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Forests Overhead",
    image: "/assets/images/alexis-antoine-1397020-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Brick Wall",
    image: "/assets/images/andrew-buchanan-1347831-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Abstract Door In The Wall",
    image: "/assets/images/annie-spratt-1365741-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Focused Ring",
    image: "/assets/images/aravind-v-1298842-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Taxi Cab",
    image: "/assets/images/arlindo-camacho-1199082-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Notre Dame",
    image: "/assets/images/artistiq-dude-1310831-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Ethereal Pathway",
    image: "/assets/images/chris-brignola-20871-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Cutting The Ribbon On Opening Day",
    image: "/assets/images/discovering-film-1575508-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Skwad",
    image: "/assets/images/ehimetalor-unuabona-1569870-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Floating Book",
    image: "/assets/images/jaredd-craig-744902-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Finding Answers",
    image: "/assets/images/joao-silas-72563-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Flyers On Wall",
    image: "/assets/images/john-cameron-1070926-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Caution, Wet Floor",
    image: "/assets/images/jorik-kleen-1594095-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "At The Edge",
    image: "/assets/images/joshua-earle-1137755-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Museum",
    image: "/assets/images/jure-tufekcic-1580055-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Foggy Morning",
    image: "/assets/images/kym-ellis-1067872-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Look Up",
    image: "/assets/images/lianhao-qu-1583921-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "City",
    image: "/assets/images/lily-banse-295760-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Parking Garage",
    image: "/assets/images/linda-sondergaard-1570907-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Giraffe",
    image: "/assets/images/louise-pilgaard-1385117-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "On The Rocks",
    image: "/assets/images/lum3n-439036-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Airplane Puddle",
    image: "/assets/images/marc-olivier-jodoin-502572-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Good Boy",
    image: "/assets/images/minnie-zhou-1519458-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Hydrophobic",
    image: "/assets/images/patrick-robert-doyle-1313469-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Snap",
    image: "/assets/images/paul-thomas-1396314-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Space Rock",
    image: "/assets/images/pawel-czerwinski-1373010-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Count The Rings",
    image: "/assets/images/rachel-pfuetzner-608792-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Ice Cream",
    image: "/assets/images/randy-laybourne-1284374-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Cactus",
    image: "/assets/images/rebekah-baines-1325785-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Hammy",
    image: "/assets/images/ricky-kharawala-10194-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Bottom Of The Slide",
    image: "/assets/images/sven-kucinic-1588936-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Railroad",
    image: "/assets/images/tom-barrett-328717-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Frosty Window",
    image: "/assets/images/tyler-rutherford-1366095-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Feathers",
    image: "/assets/images/zdenek-machacek-1403096-unsplash.jpg",
    rating: 0,
    date: new Date(Date.now())
  }
];

db.Image.deleteMany({})
  .then(() => db.Image.collection.insertMany(imageSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
