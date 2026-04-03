// callback1.js

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

// result function with callback
function result(a1, a2, callback) {
    let res = callback(a1, a2);
    console.log("Result:", res);
}

// Calling
result(10, 5, addition);
result(10, 5, subtraction);
result(10, 5, multiplication);
result(10, 5, division);