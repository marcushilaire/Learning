const characters = require("./characters.json");
const arr = [10, 11, 12, 13, 14];

const sum = (accum, currVal, index, array) => {
  console.log("Accumulator:", accum);
  console.log("Current value sent to the callback:", currVal);
  console.log("Index of the current value:", index);
  console.log("The array being reduced:", array);
  console.log("======");
  return accum + currVal;
}; // A simple function that shows all parameters of the reduce callback

// If nothing is returned from the callback function, reduce will return undefined
let sumReduce = arr.reduce(sum); //60

// console.log(arr.reduce(sum, 100)); //160
// If no accumulator(seen above as 100) is passed to reduce,
//  the value at the 0th inex becomes the accumulator and
//  and reduce begins at the 1st index

// =====
// A more involved example based on characters.json
const stringify = (accum, currVal, index, array) => {
  if (index === 1) {
    // First item in the array
    return `${accum.name}, ${currVal.name}`;
  }
  if (index === array.length - 1) {
    // Last item in the array
    return `The guild had ${array.length} members: ${accum}, ${currVal.name}.`;
  }
  // Every other item in the array
  return `${accum}, ${currVal.name}`;
};
let printString = characters.reduce(stringify);
console.log(printString); // The guild had 5 members: Jaina, Vol'jin, Gul'dan, Anduin, Ilidan.

module.exports = { sumReduce, printString };
