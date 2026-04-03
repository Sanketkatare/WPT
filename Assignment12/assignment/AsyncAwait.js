const getData = async ()=>{
    let y = await "hello";
    console.log(y);
}
async function getData1() {
    let y =  await "hellow from ";
    let x = "heeeee";
    console.log(y);
    return x;
}

getData();
getData1();
console.log(getData1())

async function getData2() {
  try {
    let response = await fetch('https://api.example.com/data'); // Pauses here
    let data = await response.json(); // Pauses here
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
getData2();