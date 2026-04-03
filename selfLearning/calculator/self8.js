// Write a program to create a new file and write some content to it in synchronous mode and
// read and display file contents on standard output in async mode

const fs = require('fs');

// Create a new file and write some content to it in synchronous mode
const content = "Hello, this is a sample content for the file.";
fs.writeFileSync('sample.txt', content);
console.log("File created and content written successfully.");
// Read and display file contents on standard output in async mode
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {  
        console.error("Error reading the file:", err);
        return;
    }
    console.log("File contents:");
    console.log(data);
});

