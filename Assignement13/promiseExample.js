// promiseExample.js

function divide(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject("Error: Cannot divide by zero");
        } else {
            resolve(a / b);
        }
    });
}

// Using Promise
divide(10, 2)
    .then((res) => console.log("Result:", res))
    .catch((err) => console.log(err));

// Error case
divide(10, 0)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));