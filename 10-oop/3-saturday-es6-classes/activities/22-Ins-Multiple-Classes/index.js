const Item = require('./item');
const Restaurant = require('./restaurant');

const items = [
  new Item('Burger', 5.99),
  new Item('Soda', 3.5),
  new Item('Chips', 2.0)
];

const restaurant = new Restaurant("McSpencer's", items);
restaurant.open();
