const characters = require("./characters.json");
const arr = [2, 4, 6, 8, 37];
const square = (currVal, index, array) => {
  console.log("Current Element sent to the Callback:", currVal);
  console.log("Index of the current value", index);
  console.log("---");
  return currVal * currVal;
};
// console.log(arr.map(square)); //[ 4, 16, 36, 64, 1369 ]

const apple = currVal => currVal.name;
const banana = ` The guild had ${characters.length} members: ${characters
  .map(apple)
  .join(`, `)}.`;
console.log(banana);
