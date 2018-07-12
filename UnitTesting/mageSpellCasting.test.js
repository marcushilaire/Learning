var mages = require("../ObjectOriented/Prototype.js");

test("adds 1 + 2 to equal 3", () => {
  expect(mages.frostMage.cast()).not.toBe(3);
});
test("object assignment", () => {
  expect(mages.frostMage).toEqual({
    spell: "Ice Lance",
    critChance: 33,
    spellPower: 20,
    spellMin: 100,
    spellMax: 300
  });
});
test("correct mage", () => {
  expect(mages.fireMage.spell).not.toEqual("Ice Lance");
});
