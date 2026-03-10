

let array = [10,2,36,65,78,10,36,65];
let array1 = array.filter((num) => num%2 == 0);
console.log(array1);
let array2 = array.filter((num) => num%2 != 0);
console.log(array2);
let array3 = array.sort((a,b) => a-b);
console.log(array3);

let b = {
	id:100,
	name:"abc",
	email:"abc@gmail.com"
}

for (const id in b) {
    if (!Object.hasOwn(b, id)) continue;
    
    const element = b[id];
    console.log(element);
}
// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;
    
//     const element = object[key];
    
    
// }