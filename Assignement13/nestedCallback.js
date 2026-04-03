// nestedCallback.js

function step1(cb) {
    setTimeout(() => {
        console.log("Step 1 completed");
        cb();
    }, 1000);
}

function step2(cb) {
    setTimeout(() => {
        console.log("Step 2 completed");
        cb();
    }, 1000);
}

function step3(cb) {
    setTimeout(() => {
        console.log("Step 3 completed");
        cb();
    }, 1000);
}

// Nested callbacks
step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps done");
        });
    });
});