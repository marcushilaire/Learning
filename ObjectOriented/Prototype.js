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
function mage(spell) {
  this.spell = spell;
}

mage.prototype.cast = function() {
  console.log("casting", this.spell);
};

var fireMage = new mage("Pyroblast");
fireMage.cast();
