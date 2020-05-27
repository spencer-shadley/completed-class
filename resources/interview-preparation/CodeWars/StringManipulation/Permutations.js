// In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.

function permutations(string) {

  // Grab each letter of the string, and place it against all other permutations of other letters

  let results = [];

  if (string.length === 1) {
    return result = [string];
  };

  for (let i = 0; i < string.length; ++i) {
    let firstChar = string[i];
    let charsLeft = string.substring(0, i) + string.substring(i + 1);
    let innerPermutations = permutations(charsLeft);
    for (let j = 0; j < innerPermutations.length; ++j) {
      results.push(firstChar + innerPermutations[j]);
    }
  }
  const uniq = [...new Set(results)];
  return uniq;
}

console.log(permutations('a'))
console.log(permutations('ab'))
console.log(permutations('abb'))
console.log(permutations('aabb'))
