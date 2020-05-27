'use strict';

const Order = require('./order');

class Restaurant {
  constructor(name, items) {
    this.name = name;
    this.orders = [];
    this.revenue = 0;
    this.items = items;
  }

  takeOrder(order) {
    this.revenue += order.item.price;
    this.orders.push(order);
    console.log(`Added #${order.id} to the queue`);
    this.printRevenue();
  }

  printRevenue() {
    console.log(`${this.name} has made ${this.revenue} so far!`);
  }

  prepareOrders() {
    const prepareInterval = setInterval(() => {
      if (this.orders.length === 0) {
        console.log('Finished cooking all orders!');

        clearInterval(prepareInterval);
      } else {
        const order = this.orders.shift();

        console.log(`#${order.id} has been prepared.`);
      }
    }, 1000);
  }

  // when opening make sure we have at least one
  // of every item ready to go
  open() {
    const orders = this.items.map(item => new Order(item));
    orders.forEach(order => this.takeOrder(order));
    this.prepareOrders();
  }
}

module.exports = Restaurant;
