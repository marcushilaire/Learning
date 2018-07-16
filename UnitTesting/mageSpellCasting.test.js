const mages = require("../ObjectOriented/Prototype.js");

test("Is Icelance total damage between(inclusive) its minimum(2000) and maximum(12,000)", () => {
  expect(mages.frostMage.cast().damage).toBeGreaterThanOrEqual(2000);
  expect(mages.frostMage.cast().damage).toBeLessThanOrEqual(12000);
});

test("Is PyroBlast total damage between(inclusive) its minimum(1500) and maximum(9000)", () => {
  expect(mages.fireMage.cast().damage).toBeGreaterThanOrEqual(1500);
  expect(mages.fireMage.cast().damage).toBeLessThanOrEqual(9000);
});
// What is the best way to set up unit testing when the same input gives a defined range of outputs
// alternatively, should i not set up code that operates in this way

test("Are the prototype functions properly attached", () => {
  expect(mages.Mage.prototype.cast).toBeDefined();
  expect(mages.Mage.prototype.cast).not.toBeNull();
});

test("The correct object for frost made has been created", () => {
  expect(mages.frostMage).toEqual({
    spell: "Ice Lance",
    critChance: 33,
    spellPower: 20,
    spellMin: 100,
    spellMax: 300
  });
});

test("Fire mage has pyroblast and not ice lance", () => {
  expect(mages.fireMage.spell).not.toEqual("Ice Lance");
});

const loopCaller = callback => {
  for (let i = 0; i < 6; i++) {
    callback(i, i + 1);
  }
};

test("Counting function calls", () => {
  const testSum = jest.fn();
  loopCaller(testSum);
  expect(testSum).toHaveBeenCalledTimes(6);
});
