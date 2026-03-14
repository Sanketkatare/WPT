console.log("hello");
function step1(callback){
    setTimeout(()=>{
        console.log("step1");
        callback();
    },10000);
}

function step2(callback){
    setTimeout(() => {
        console.log("step2");
        callback();
    }, 10000);
}

function step3(callback){
    setTimeout(() => {
        console.log("step3");
        callback();
    }, 10000);
}

step1(()=>{
     step2(()=>{
        step3(()=>{
            setTimeout(() => {
                console.log("all steps get completed");
            }, 5000);
            
        })
     })
})