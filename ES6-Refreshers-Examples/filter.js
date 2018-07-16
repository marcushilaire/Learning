const characters = require("./characters.json");

const filterAlliance = (currVal, index, array) => {
  console.log("Current Element sent to the Callback:", currVal.name);
  console.log("Index of the current value", index);
  console.log("---");
  if (currVal.faction === "Alliance") {
    return true;
  }
  return false;
};
// The amount of times filter runs is equal to arr.length

let filteredChars = characters.filter(filterAlliance);

// Using map to create a string from the resulting array
const convertName = character => character.name;

const stringify = `The guild has ${
  filteredChars.length
} alliance members: ${filteredChars.map(convertName).join(", ")}.`;

module.exports = { stringify, filteredChars };
