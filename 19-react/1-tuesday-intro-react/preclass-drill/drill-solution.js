// https://edabit.com/challenge/cW5gZqYEv6bszrNSw

// Remove Surrounding Duplicate Items
// Create a function that takes a sequence of either strings or numbers, removes the surrounding duplicates and returns an array of items without any items with the same value next to each other and preserves the original order of items.

// Examples
// uniqueInOrder("AAAABBBCCDAABBB") ➞ ["A", "B", "C", "D", "A", "B"]

// uniqueInOrder("ABBCcAD") ➞ ["A", "B", "C", "c", "A", "D"]

// uniqueInOrder([1, 2, 2, 3, 3]) ➞ [1, 2, 3]
// Notes
// The initial sequence of items can be either a string or an array.
// Tests are case sensitive.

// * Time complexity: O(N)
// * Space complexity: O(N)


// condensed ES6+ solution
// use spread operator (...) to extract contents of sequence argument and create new array.
// this guarantees the incoming argument will be an array, and allows us to use the .filter
// method. 
// Filter fires off a callback for each element of the array, and requires only one
// parameter which is the element (x). Optionally takes parameters for the current index (i),
// and the array itself (a). 
// The callback is an arrow function, and arrow functions allow single-line functions to 
// automatically return, eliminating the need for the 'return' keyword
function uniqueInOrder(sequence) {
  return [...sequence].filter((x,i,a) => x !== a[i-1]);
}

// more verbose solution
function uniqueInOrder(sequence) {
  // check if sequence is a string, and if so convert to array
  if(typeof(sequence) == "string"){
     var arr = sequence.split("");
  }
  else{
    arr = sequence;
  }
  
  var noRep = [];                      // create output array
  for(var i = 0; i < arr.length; i++){ // loop through input 
    if(i === 0){                       // always push the first element to output array
      noRep.push(arr[i]);
    }
    else{
      if(arr[i] != arr[i-1]){          // check if we have a repeat by looking at previous
        noRep.push(arr[i]);            // and if not then push
      }
    }
  }
  
  return noRep;                        // return output array
}