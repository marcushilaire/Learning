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
  printHardware: printHardware
};
let nvidia = {
  model: "gtx1080"
};
Object.setPrototypeOf(nvidia, gpu);
nvidia.printHardware();
