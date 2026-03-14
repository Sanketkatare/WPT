console.log("assignemtn no 3");
function add(a,b){
    if(a<0 || b<0){
        console.log(`nagative value cannot be acceptable`);
    }else{
        return a+b;
    }
}

function sub(a,b){
    if(b == 0)
    {
        console.log("error");
    }else{
        console.log(a-b);
    }
}

function multi(a,b){
    setTimeout(() => {
        if(a == 0 || b == 0)
        {
            console.log( "error");

        }else{
            console.log(a*b);
        }
    });
}

function divi(a,b){
    setTimeout(() => {
        if(b == 0){
            return "the number cannot be the zero";
        }else{
            return a/b;
        }
    });
}
function result(e,r){
    if(e){
        console.log(e.message);
    }else {
        console.log(`result:`+ r);
    }
}
//through the result fuction we are showing the error message and dirctly calling the fuction 

add(-2,5,result);
console.log(sub(2,3,result));
console.log(divi(2,1,result));
console.log(multi(6,4,result));