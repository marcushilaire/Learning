// using arrow functions in a method
let objectTest = {
  message: "hello",
  greet: greeting => {
    console.log(greeting);
  }
};
// objectTest.greet(objectTest.message);

// constructor
// let hardware = () => {
function hardware() {
  this.print = () => {
    // console.log("this is a ", model);
    console.log("hello");
  };
}
let gpu = new hardware();
gpu.print("gtx 1080");
