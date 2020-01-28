const Item = require('./item');
const Restaurant = require('./restaurant');

const restaurant = new Restaurant("McJared's");

const items = [
  new Item('Burger', 5.99),
  new Item('Soda', 3.5),
  new Item('Chips', 2.0)
];

restaurant.processItems(items);
