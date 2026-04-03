// callbackError.js

function multiplication(a, b) {
    if (b === 0) return "Error: Cannot multiply by zero";
    return a * b;
}

function division(a, b) {
    if (b === 0) return "Error: Cannot divide by zero";
    return a / b;
}

// result function (error-first callback style)
function result(a, b, callback) {
    let res = callback(a, b);

    if (typeof res === "string") {
        console.log(res); // error message
    } else {
        console.log("Result:", res);
    }
}

// Calls
result(10, 0, division);
result(10, 5, multiplication);