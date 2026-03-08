function appendToConsole(value) {
    const console = document.getElementById('console');
    console.textContent += value;
}

function calculate() {
    const console = document.getElementById('console');
    try {
        const result = eval(console.textContent);
        console.textContent = result;
    } catch (error) {
        console.textContent = 'Error';
    }
}
function clearConsole() {    const console = document.getElementById('console');
    console.textContent = '';
}   
