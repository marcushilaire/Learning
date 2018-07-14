var arr = [
  {
    class: "Mage",
    level: 110,
    name: "Anthyous",
    race: "Blood Elf",
    faction: "Horde"
  },
  {
    class: "Warrior",
    level: 80,
    name: "Heratio",
    race: "Goblin",
    faction: "Horde"
  },
  {
    class: "Warlock",
    level: 90,
    name: "Johnothan",
    race: "Human",
    faction: "Alliance"
  },
  {
    class: "Hunter",
    level: 80,
    name: "Joseph",
    race: "Dwarf",
    faction: "Alliance"
  },
  {
    class: "Demonhunter",
    level: 98,
    name: "Ilidan",
    race: "Nightelf",
    faction: "Alliance"
  }
];

let filterAlliance = (currentEle, index, array) => {
  console.log("Current Element sent to the Callback:", currentEle.name);
  console.log("Index of the current value", index);
  console.log("---");
  if (currentEle.faction === "Alliance") {
    return true;
  }
  return false;
};

console.log(arr.filter(filterAlliance));

// The amount of times filter runs is equal to arr.length
