// using arrow functions in a method
let objectTest = {
  message: "hello",
  greet: greeting => {
    console.log(greeting);
  }
};
// objectTest.greet(objectTest.message);

// constructors

// ** Cannot use arrow functions to define function declared constructor
// let hardware = () => {
// **

// **  function declaration can be hoisted
let gpu = new Hardware();
// gpu.print("gtx 1080");
// **
function Hardware() {
  this.print = model => {
    console.log("this is a ", model);
    // console.log("hello");
  };
}

//class declarations cannot be hoisted

class Animals {
  constructor(species, breed) {
    (this.species = species), (this.breed = breed);
    this.pet = () => {
      console.log("this is my", this.species, this.breed);
    };
  }
}

let puppy = new Animals("dog", "shiba");
puppy.pet();
