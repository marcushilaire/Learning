// using arrow functions in a method
let objectTest = {
  message: "hello",
  greet: greeting => {
    console.log(greeting);
  }
};
// objectTest.greet(objectTest.message);

// constructor

// ** this does not work with arrow functions
// let hardware = () => {
// **

function Hardware() {
  this.print = model => {
    console.log("this is a ", model);
    // console.log("hello");
  };
}
let gpu = new Hardware();
gpu.print("gtx 1080");
