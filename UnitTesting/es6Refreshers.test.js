const map = require("../ES6-Refreshers-Examples/map.js");
const reduce = require("../ES6-Refreshers-Examples/reduce.js");
//Simpler examples
test("Does map.js correctly return the squared array", () => {
  expect(map.squareMap).toEqual([4, 16, 36, 64, 1369]);
});
test("Does reduce.js correctly return the sum of the array", () => {
  expect(reduce.sumReduce).toBe(60);
});
//Involved examples
test("Do map.js and reduce.js return the same value", () => {
  expect(map.stringify).toBe(reduce.printString);
});
