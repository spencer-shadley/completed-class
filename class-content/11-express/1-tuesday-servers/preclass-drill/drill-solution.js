'use strict';

class Technology {
  constructor() {
    this.energy = 'electricy';
    console.log('Technology constructed');
  }

  getEnergy() {
    return this.energy;
  }
}

class Computer extends Technology {
  constructor(OS) {
    super();
    this.OS = OS;
    console.log(
      `Computer constructed with
        OS: ${this.OS}
        energy: ${this.energy}
        getEnergy(): ${super.getEnergy()}`
    );
  }
}

class Desktop extends Computer {
  constructor(OS, numMonitors) {
    super(OS); // must call the super constructor before accessing "this"
    this.numMonitors = numMonitors;
    console.log(this.OS);
    console.log(
      `Desktop constructed with:
        monitors: ${this.numMonitors}
        this.OS: ${this.OS}
        super.OS: ${this.OS}
        this.energy: ${this.energy}
        super.energy: ${this.energy}
        getEnergy(): ${super.getEnergy()}`
    );
  }
}

class Laptop extends Computer {
  constructor(OS, batterySizeInmAh) {
    console.log(batterySizeInmAh);
    super(OS); // must call the super constructor before accessing "this"
    this.batterySizeInmAh = batterySizeInmAh;
    console.log(
      `Laptop constructed with:
        monitors: ${this.numMonitors}
        this.OS: ${this.OS}
        super.OS: ${this.OS}
        energy: ${this.energy}`
    );
    this.printBatterySize();
  }

  printBatterySize() {
    console.log(
      this.batterySizeInmAh > 9000
        ? "It's over 9,000!"
        : `Battery is ${this.batterySizeInmAh}mAh`
    );
  }
}

const technology = new Technology(); // "Technology constructed"
console.log(technology.getEnergy()); // "electricy"
// console.log(technology.printBatterySize()); // printBatterySize() is a laptop method

const desktop = new Desktop('Linux', 3);
/*
Output:
Technology constructed // Desktop() calls super() (Computer) which then calls its super() (Technology)
Computer constructed with // when Technology() finishes we finish constructing the Computer()
        OS: Linux
        energy: undefined // energy is a property of technology. Properties are not in the prototypal chain.
        getEnergy(): electricy // getEnergy() is a method of Technology, which a Computer is and has access to through the prototypal chain
Desktop constructed with: // finally we are at our concrete leaf Desktop constructor
        monitors: 3
        this.OS: Linux
        super.OS: undefined // The OS was directly set on the Desktop and is only available in this
        this.energy: electricy
        super.energy: undefined // Same as OS, energy is only available in this
        getEnergy(): electricy // getEnergy() is part of the protypal chain so it can find it
*/

console.log(desktop.getEnergy()); // electricy
// console.log(desktop.printBatterySize()); // ERROR: printBatterySize() is not a function on Desktop, Computer or Technology

const laptop = new Laptop('Windows', 9001); // The laptop constructor takes in an OS and batterySize
/*
Output:
9001
Technology constructed
Computer constructed with
        OS: Windows
        energy: undefined
        getEnergy(): electricy
Laptop constructed with:
        monitors: undefined
        this.OS: Windows
        super.OS: undefined
        energy: undefined
It's over 9,000!
*/

console.log(laptop.getEnergy()); // electricy
laptop.printBatterySize(); // It's over 9,000!
// console.log(laptop.super.printBatterySize()); // ERROR: super is a special property only available in a class
