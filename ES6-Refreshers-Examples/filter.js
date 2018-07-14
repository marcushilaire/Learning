const characters = require("./characters.json");

const filterAlliance = (currentEle, index, array) => {
  console.log("Current Element sent to the Callback:", currentEle.name);
  console.log("Index of the current value", index);
  console.log("---");
  if (currentEle.faction === "Alliance") {
    return true;
  }
  return false;
};

console.log(characters.filter(filterAlliance));

// The amount of times filter runs is equal to arr.length
