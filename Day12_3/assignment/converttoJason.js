// 2)  declare 1 variable which contains data for 
//     Object format convert that data in json format
//     and again in Object Format 
let employee = {
    Ename: "Sanket",
    Esal: 120000,
    EId: 12
}

let a = JSON.stringify(employee);
console.log(a);
let b = JSON.parse(a);
console.log(b);