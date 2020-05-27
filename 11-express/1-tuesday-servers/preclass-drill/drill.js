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
        energy: ${super.energy}
        getEnergy(): ${super.getEnergy()}`
    );
  }
}

class Desktop extends Computer {
  constructor(numMonitors) {
    this.numMonitors = numMonitors;
    super();
    console.log(
      `Desktop constructed with:
        monitors: ${this.numMonitors}
        this.OS: ${this.OS}
        super.OS: ${super.OS}
        this.energy: ${this.energy}
        super.energy: ${super.energy}
        getEnergy(): ${super.getEnergy()}`
    );
  }
}

class Laptop extends Computer {
  constructor(batterySizeInmAh) {
    super(OS);
    console.log(batterySizeInmAh);
    this.batterySizeInmAh = batterySizeInmAh;
    console.log(
      `Laptop constructed with:
        monitors: ${this.numMonitors}
        this.OS: ${this.OS}
        super.OS: ${super.OS}
        energy: ${super.energy}
        getEnergy: ${super.getEnergy()}`
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

// const technology = new Technology();
// console.log(technology.getEnergy());
// console.log(technology.printBatterySize());

// const desktop = new Desktop(3);
// console.log(desktop.getEnergy());
// console.log(desktop.printBatterySize());

const laptop = new Laptop(9001);
console.log(laptop.getEnergy());
laptop.printBatterySize();
laptop.super.printBatterySize();
