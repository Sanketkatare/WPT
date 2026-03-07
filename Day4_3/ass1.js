let array = [];
function add()
{
    let array = Number(document.getElementById('text1').value);
    let rem, sum=0;
    for(var i=0;i<array.lenght;i++)
    {
        rem=array%10;
        sum+=rem;
        array= array/10;
    }
    console.log(sum);
    document.getElementById('display_add').innerHTML +=sum;
}

function add1()
{
    let text = document.getElementById('text1').value;
    array.push(text);
    document.getElementById('added').innerHTML = text;
}
function display()
{
    //
    document.getElementById('display_dis').innerHTML += array;
}

function toUpperCase()
{
    // read the value from the input (with id "Radio")
    let a = document.getElementById('Radio').value;
    let c = a.toUpperCase();
    console.log(c);
    document.getElementById('output').innerHTML = c;
    
}
function toLowerCase()
{
    // read the value from the input (with id "Radio")
    let a = document.getElementById('Radio').value;
    let c = a.toLowerCase();
    console.log(c);
    document.getElementById('output').innerHTML = c;
    
}
function asItIs()
{
        let a = document.getElementById('Radio').value;
        document.getElementById('output').innerHTML = a;
}
