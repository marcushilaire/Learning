const map = require("../ES6-Refreshers-Examples/map.js");
const reduce = require("../ES6-Refreshers-Examples/reduce.js");
const filter = require("../ES6-Refreshers-Examples/filter.js");

//Simpler examples
test("Does map.js correctly return the squared array", () => {
  expect(map.squareMap).toEqual([4, 16, 36, 64, 1369]);
});

test("Does reduce.js correctly return the sum of the array", () => {
  expect(reduce.sumReduce).toBe(60);
});

test("Does filter.js return the correct object", () => {
  expect(filter.filteredChars).toEqual([
    {
      class: "Mage",
      level: 110,
      name: "Jaina",
      race: "Human",
      faction: "Alliance"
    },
    {
      class: "Priest",
      level: 80,
      name: "Anduin",
      race: "Human",
      faction: "Alliance"
    },
    {
      class: "Demonhunter",
      level: 98,
      name: "Ilidan",
      race: "Nightelf",
      faction: "Alliance"
    }
  ]);
});

//Involved examples
test("Do map.js and reduce.js return the same value", () => {
  expect(map.stringify).toBe(reduce.printString);
});

test("Does filter.js properly return the single string ", () => {
  expect(filter.stringify).toEqual(
    "The guild has 3 alliance members: Jaina, Anduin, Ilidan."
  );
});
