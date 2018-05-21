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
function Mage(spell, level) {
  this.spell = spell;
  this.level = level;
}

Mage.prototype.cast = function() {
  console.log(this);
  console.log("Level", this.level, " Mage casting", this.spell);
};

// These Objects do not contain the cast function when logged but have access to them
var fireMage = new Mage("Pyroblast", 110); //{spell: "Pyroblast", level: 110}
var frostMage = new Mage("Ice Lance", 90); //{spell: "Ice Lance, level: 90"}

fireMage.cast();
frostMage.cast();
