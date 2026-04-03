// evenSum.js

// Get command line arguments (skip first 2 default args)
let args = process.argv.slice(2);

let sum = 0;

args.forEach(num => {
    let n = Number(num);

    if (!isNaN(n) && n % 2 === 0) {
        sum += n;
    }
});

console.log("Sum of even numbers:", sum);
