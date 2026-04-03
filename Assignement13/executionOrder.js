// executionOrder.js

console.log("1. Normal function");

setTimeout(() => {
    console.log("2. setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("3. Promise");
});

console.log("4. End");