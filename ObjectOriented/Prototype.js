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

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

Mage.prototype.rollCritical = function(critChance) {
  return critChance > randomNumber(0, 100 - critChance);
};

Mage.prototype.cast = function() {
  // rolling damage of the spell
  var baseDamage = randomNumber(this.spellMin, this.spellMax);

  // scaling spell damage up
  var scaleDamage = baseDamage * this.spellPower;

  // rolling to see if the spell crits
  var critRoll = this.rollCritical(this.critChance);

  //final damage conditional
  if (critRoll) {
    return {
      damage: scaleDamage * 2,
      hitType: "Critical"
    };
  }

  return {
    damage: scaleDamage,
    hitType: "Normal"
  };
};

// These Objects do not contain the cast function when logged but have access to them
var fireMage = new Mage("Pyroblast", 15, 50); //{spell: "Pyroblast", spellPower: 15: critChance: 50}
var frostMage = new Mage("Ice Lance", 20, 33); //{spell: "Ice Lance, spellPower: 20, critChance: 33}

// fireMage.cast();
// frostMage.cast();

module.exports = { fireMage, frostMage, Mage };
