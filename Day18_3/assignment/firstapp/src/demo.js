// C)   create Function Component which display 
//       textfield and button 
//       on ButtonClick display message on  Console 
export default function Demo() {
    console.log("Fuction form Demo");
    function call() {
        console.log("button clicked")
        return <div><b>button clicked</b></div>
    }
    return <div>
        <input type="text" name="num1" placeholder="give the number"></input>
        <button onClick={call}>click</button>
    </div>
}