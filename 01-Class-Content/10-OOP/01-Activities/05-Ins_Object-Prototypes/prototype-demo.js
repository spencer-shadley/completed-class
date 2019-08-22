// First we create a basic food object
const food = {
    type: this.type,
    eatFood: function (type) {
        console.log("You have eaten the " + this.type);
    }
}

// We use Object.create to make a new chickenSandwich object, with the food object being its prototype.
const chickenSandwich = Object.create(food)

// 
chickenSandwich.type = "sandwich" 
chickenSandwich.eatFood();