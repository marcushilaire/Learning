const characters = require("./characters.json");
const arr = [2, 4, 6, 8, 37];
const square = (currVal, index, array) => {
  console.log("Current Element sent to the Callback:", currVal);
  console.log("Index of the current value", index);
  console.log("---");
  return currVal * currVal;
}; // A simple function that shows the parameters of the map callback

let squareMap = arr.map(square); //[ 4, 16, 36, 64, 1369 ]

// =====
// A more involved example based on characters.json
const convertName = currVal => currVal.name;
const stringify = `The guild had ${characters.length} members: ${characters
  .map(convertName)
  .join(`, `)}.`;

console.log(stringify); // The guild had 5 members: Jaina, Vol'jin, Gul'dan, Anduin, Ilidan.
module.exports = { squareMap, stringify };
