const fs = require("fs");

const readLyrics = (file, encoding) => {
  return new Promise((resolve, reject) => {
    const myCallback = (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      resolve(data);
    };
    fs.readFile(file, encoding, myCallback);
  });
};

readLyrics("../Helpers/Flyte.txt", "utf8").then(data => {
  console.log(data);
});
//the promise constructor takes in one argument, a function.
// that function takes two functions a arguments, resolve  and reject
