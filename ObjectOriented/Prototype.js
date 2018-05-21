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
function Mage(spell) {
  this.spell = spell;
}

Mage.prototype.cast = function() {
  console.log("Casting", this.spell);
};

// These Objects do not contain the cast function when logged
var fireMage = new Mage("Pyroblast"); //{spell: "Pyroblast"}
var frostMage = new Mage("Ice Lance"); //{spell: "Ice Lance"}

fireMage.cast();
frostMage.cast();
