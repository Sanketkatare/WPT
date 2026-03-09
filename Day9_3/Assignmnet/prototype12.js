// 3rd Assignment
Object.prototype.print = function(...s){
    console.log("prototype" + s);
}
// Object.prototype.add = function(...c,...s){
//     c = a.f+b.g;
//     console.log(c);
// }
// let obj = {
//     p: 50
//     q: 100
// }
let a = {
    f : 100
}
let b= {
    g : 200
}
// a.add(obj.p, obj.q);

a.print(a.f);
b.print(b.g);
// //4th assignment
// let x = document.forms["form1"]["sid"].value;
// let s = stringify(x);
// const y = document.forms["form1"]["sname"].value;
// const z = document.forms["form1"]["sgrade"].value;

let objStudent = '{"StudentId":"s","StudentName":"y","Grade":"z"}';
const obj = JSON.parse(objStudent);// converts json to object

//console.log(obj);
    objStudent.print(objStudent);
// used the prototype function 