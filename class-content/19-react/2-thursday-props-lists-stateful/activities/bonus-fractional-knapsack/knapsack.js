/**
 * Fractional Knapsack Problem
 *
 * @param {Array} items the items from which we can choose to insert
 * @param {Number} capacity the total capacity available for the knapsack
 * @example maxValueFromKnapsack([{weight: 40, value: 200}, {weight: 10, value: 100}], 45) => 175 + 100 = 275
 */
function maxValueFromKnapsack(items, capacity) {
    let totalValue = 0;

    // sort by proportion of value per weight
    items.sort((itemA, itemB) => itemB.value / itemB.weight - itemA.value / itemA.weight); // O(NlogN)

    // go through the items (ordered by highest value per weight)
    for (const item of items) { // N
        // if we have room, take the entire item (it has the highest value)
        if (item.weight <= capacity) {
            totalValue += item.value;
            capacity -= item.weight;
        } else {
            // we ran out of room to take the entire item
            // take what we can and leave
            totalValue += capacity * (item.value / item.weight);
            return totalValue;
        }
    }

    // we should never get here, safety return
    console.error(`how'd you get here?`);
    return totalValue;
}

// eslint-disable-next-line no-magic-numbers
console.log(maxValueFromKnapsack([{ weight: 40, value: 200 }, { weight: 10, value: 100 }], 45) === 275);
