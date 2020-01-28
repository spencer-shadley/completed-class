'use strict';

function Shape(area, perimeter) {
  this.area = area;
  this.perimeter = perimeter;
}

Shape.prototype.printInfo = function() {
  console.log(`Area: ${this.area}`);
  console.log(`Perimeter: ${this.perimeter}`);
};

const shape = new Shape(25, 25);

shape.printInfo();
