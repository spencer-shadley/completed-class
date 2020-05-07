// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''

function list(names) {

    var str = "";

    if (names === undefined) {
        return str;
    }

    for (var i = 0; i < names.length; i++) {
        if (i >= names.length - 2) {
            str += names[i]["name"] + " & ";
        } else
            str += names[i]["name"] + ", ";
    }
    return str.slice(0, str.length - 2).trim();

}

console.log((list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }]), 'Bart, Lisa, Maggie, Homer & Marge',
    "Must work with many names"));
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]), 'Bart, Lisa & Maggie',
    "Must work with many names")
console.log((list([{ name: 'Bart' }, { name: 'Lisa' }]), 'Bart & Lisa',
    "Must work with two names"))
console.log((list([{ name: 'Bart' }]), 'Bart', "Wrong output for a single name"))
console.log((list([]), '', "Must work with no names"))