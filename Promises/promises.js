const fs = require("fs");

const readLyrics = (file, encoding) => {
  return new Promise((resolve, reject) => {
    const myCallback = (err, data) => {
      if (err) reject(`Error code: ${err.code}`); //essentialy treated as throwing an error
      resolve(data);
    };
    fs.readFile(file, encoding, myCallback);
  });
};

readLyrics("../Helpers/Flyte.txt", "utf8").then(data => {
  console.log(data);
});
// .catch(err => {
//   console.log(err);
// });

//the promise constructor takes in one argument, a function.
// that function takes two functions a arguments, resolve  and reject
