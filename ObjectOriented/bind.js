let gpu = {
  model: "gtx 1080",
  printModel: function() {
    //   ()=>{ does not work in this context explained in the link below
    // https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/
    console.log(this.model);
  }
};
gpu.printModel(); // "gtx 1080"
let modelPrnter = gpu.printModel;
// ** the above function is essentially the same as:
// modelPrinter = function(){
//     console.log(this.model)
// }
//  it returns undefined because it has lost its scope within the gpu object
modelPrnter(); // undefined
//  this issue is solved below with the bind method which attaches the scope of the function to GPU
let boundPrint = gpu.printModel.bind(gpu);
boundPrint(); // "gtx 1080"
