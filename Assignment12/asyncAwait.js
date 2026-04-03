// asyncAwait.js

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 2000);
    });
}

async function getData() {
    console.log("Fetching data...");
    let result = await fetchData();
    console.log(result);
}

getData();