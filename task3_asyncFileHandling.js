/*
Problem Statement -  Asynchronous File Handling
Create a Node.js script that reads a text file named "data.txt" and counts the number of words in it. The script should print the total word count to the console.
*/

const fs = require("fs");

const countWords = (filePath) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log("Error reading file:", err.message);
      return;
    }
    const words = data.split(/\s+/).filter((word) => word !== "");
    console.log(words.length);
  });
};

countWords("data.txt");
