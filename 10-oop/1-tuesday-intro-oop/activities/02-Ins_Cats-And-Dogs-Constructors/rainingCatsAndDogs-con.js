'use strict';

// Constructor function which can be used to create objects containing the properties "raining", "noise", and the "makeNoise()" function
function Animals(raining, noise) {
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = () => {
    if (this.raining) {
      console.log(this.noise);
    }
  };
}

// named parameters!
function Animal2({ raining, noise }) {
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = () => {
    console.log(this.noise);
  };
}
const cow = new Animal2({ raining: true, noise: 'moo' });
cow.makeNoise();

// Sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
const dogs = new Animals(true, 'Woof!');
const cats = new Animals(false, 'Meow!');

// Calling dogs and cats makeNoise methods
dogs.makeNoise();
cats.makeNoise();

// If we want, we can change an objects properties after they're created
cats.raining = true;
cats.makeNoise();

function massHysteria(dogs, cats) {
  if (dogs.raining && cats.raining) {
    console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!');
  }
}

massHysteria(dogs, cats);
