import { Component } from "react";

export default class MyClass extends Component {
    render() {
        function call(e) {
            return (
                console.log(e.target.value)
            )
        }
        function texthandler(e) {
            console.log(e.target.value)
        }
        return <div>
            <pre>
                <h1> from class</h1>
                <input type="text" placeholder="User Name" onBlur={call}></input><br>
                </br>

                <br>
                </br><input type="text" onBlur={texthandler}></input>
                <br></br>
                
                <button>click</button>
            </pre>

        </div>
    }
}