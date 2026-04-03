function add(a,b){
    return "addition is"+(a+b);
}
function division(a,b){
    setTimeout(() => {
        if (b == 0) {
            return "error"
        } else {
            return "division : " + (a / b);
        }
    }, 10000);
}

function multiplication(a,b){
    setTimeout(() => {
        if (b == 0) {
            return "error"
        } else {
            return "multiplication : " + (a * b);
        }
    }, 10000);
}

function substraction(a,b){
    setTimeout(() => {
        if (b == 0) {
            return "error"
        } else {
            return "substraction : " + (a - b);
        }
    }, 10000);
}

function result(a, b, callback) {
    return callback(a, b);//add()
}
// through the result function we are calling the another function 

console.log(result(2, 3, add));// add(2,3)
console.log(result(5, 3, substraction));
console.log(result(6, 3, division));
console.log(result(5, 3, multiplication));

    