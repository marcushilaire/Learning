// Basic information on object prototype
// *************
// let printHardware = () => {
//   console.log(this);
//   console.log(this.model);
// };
//  This arrow function does not work in this case.
function printHardware() {
  console.log(this);
  console.log(this.model);
}

let gpu = {
  printHardware
};

let nvidia = {
  model: "gtx1080"
};

let cryptoBoom = {
  price() {
    console.log(this.model, "is far more expensive than it should be");
  }
};

Object.setPrototypeOf(nvidia, gpu);
// nvidia.printHardware();
Object.setPrototypeOf(cryptoBoom, nvidia);
// cryptoBoom.price();

// *************
// Deeper into protoype
// let mage = spell => {
// arrow functions do not work in this case
function Mage(spell, spellPower, critChance) {
  this.spell = spell;
  this.critChance = critChance;
  this.spellPower = spellPower;
  this.spellMin = 100;
  this.spellMax = 300;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

Mage.prototype.rollCritical = function(critChance) {
  return critChance < randomNumber(0, 100);
};

Mage.prototype.cast = function() {
  console.log("Casting", this.spell);

  // rolling damage of the spell
  var baseDamage = randomNumber(this.spellMin, this.spellMax);
  // console.log(baseDamage);

  // scaling spell damage up
  var scaleDamage = baseDamage * this.spellPower;
  // console.log(scaleDamage);

  // rolling to see if the spell crits
  var critRoll = this.rollCritical(this.critChance);
  // console.log(critRoll);

  //final damage conditional
  if (critRoll) {
    return `Critical Hit! ${scaleDamage * 2}`;
  }

  return scaleDamage;
};

// These Objects do not contain the cast function when logged but have access to them
var fireMage = new Mage("Pyroblast", 15, 50); //{spell: "Pyroblast", level: 110}
var frostMage = new Mage("Ice Lance", 20, 33); //{spell: "Ice Lance, level: 90"}

// fireMage.cast();
// frostMage.cast();

module.exports = { fireMage, frostMage };
