/*
More info about Array Functions!

Add a value to the end of an array.
push(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

Remove the value at the end of the array (returns the popped value!)
pop(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

Add a value to the front of an array.
unshift(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

Remove the value at the front of an array (returns the shifted value!)
shift(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

*/


// Write a function to reverse the values in a given array.

// Build your own array lists as a group, so share some of your favorite movies, games, or even pokemon! (Or make up your own!)
var favMovies = [];
var favGames = [];
var favPokemon = [];

var boringArr = ['a', 'b', 'c', 'd', 'e', 'f'];

// var boringTemp = boringArr[2]



// function reverseArr(arr) {
//   var temp = "";
//   for ( var i = arr.length - 1; i > 0; i++) {

//   }

// }

var R2 = boringArr.reverse()
console.log(R2)

// reverseArr(boringArr);

// Optional Challenges!
// Level 1: Construct the function with both a For Loop and then a While Loop. (Watch out for infinite loops!)
// Level 2: Knowing .pop() RETURNS the removed value, find a way to use this to move a value to the other side.
// Level 3: Create the function in a way that reverses the Array "in place" where you don't create a new Array and use a temp variable!
// (Hint: This one can be challenging, so don't stress this one!)