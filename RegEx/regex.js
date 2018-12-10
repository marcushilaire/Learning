const fs = require("fs");

const dataTrim = currVal => {
  if (currVal.length > 0) {
    return true;
  }
  return false;
};

const callback = (err, data) => {
  if (err) throw err;

  //   let dataArr = data.split("\n").filter(dataTrim);
  //   dataArr.forEach(function(currVal) {
  //     console.log(currVal.match(fullWords));
  //   }); //
  //   console.log(
  //     data
  //       .split("\n")
  //       // .filter(dataTrim)
  //       .match(victoria)
  //   );
  console.log(data.split("\n"));
};
fs.readFile("../Helpers/Flyte.txt", "utf8", callback);

// Basic string searching
const noCaps = /[a-z]/g;
const capVowels = /[AEIOU]/;
const fullWords = /\w/g;
const victoria = /[falls]\wg/;
