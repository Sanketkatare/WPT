console.log("Assginment No 4");

let  result = new Promise((resolve, reject)=>{
    let a = 10;
    if(a%10==0)resolve("numer"+a+"is even")
        reject("number2")
});

result.then((message => console.log(message)))
.catch((error) => console.log(error));

//callback function using promise
function add(a,b){
    let aa = new Promise((resolve,reject)=>
    {
        if(a != 0)resolve(`the addition of two number is: `+(a+b))
            reject("number cannot be the zero")
    });
    aa.then((message=>console.log(message)))
    .catch((error)=>console.log(error));
}
// function sub(a,b){
//     setTimeout(() => {
//         let aa=new Promise((resolve,reject)=>{
//         if(a == 0 || b == 0)resolve("number is not zero")
//             reject(a-b)
//     });
//     aa.then((message => console.log(message)))
//     .catch((error)=> console.log(error))
//     }, 10000);
// }
setTimeout(() => {
    console.log("settimeout printed");
}, 1500);

function result1(a, b, callback) {
    return callback(a, b);//add()
}

result1(5,6,setTimeout);
result1(3,0,sub);
