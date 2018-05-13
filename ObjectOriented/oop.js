// using arrow functions in a method
let objectTest = {
  message: "hello",
  greet: greeting => {
    console.log(greeting);
  }
};
// objectTest.greet(objectTest.message);

// constructor
let person = () => {
  console.log("hello");
};
person();
