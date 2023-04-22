const path = require("path");
const fs = require("fs");

//Creating folder
fs.mkdir(path.join(__dirname, "/myFolder"), {}, (err) => {
  if (err) throw err;
  console.log("Folder Created");
});


//Overiting file
fs.writeFile(
  path.join(__dirname, "/myFolder", "myFile.txt"),
  "qwerty",
  (err) => {
    if (err) throw err;
    console.log("File created");
  }
);


//Adding to file
fs.appendFile(
    path.join(__dirname, "/myFolder", "myFile.txt"),
    "\njelly beans",
    (err) => {
      if (err) throw err;
      console.log("text added");
    }
);


//Read file
fs.readFile(
    path.join(__dirname, "/myFolder", "myFile.txt"), "utf8", (err,data) => {
        if(err) throw err;
        console.log(data);
    }
);