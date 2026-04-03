
function hide1(){
myElement = $("p");
myElement.hide();
}
function show1(){
    myElement = $("p");
    myElement.show();
}

let array = [];
array.push(1, 25, 35, 20, 45, 7, 90, 8, 14, 36); // assignment 1 to display the array as it is
console.log(array);

let array1 = array.filter((num) => num%2 == 0);
console.log("evven numbers are",array1);
let array3= array.filter((num)=>num%2 !=0);
console.log(array3);
let array2 = array.sort((n,n1) => n-n1);
console.log(array2);

