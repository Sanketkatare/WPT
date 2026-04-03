// 4) Accept TO DO tasks in text field and display 
//    tasks in Ordered List on same page on buttonclick

import { Component } from "react";  

export default class TodoTask extends Component {

    constructor() {
        super();
        this.state = { task: "", tasks: [] }
    }   

    render() {
        function call() {
            console.log(document.getElementById("task").value)
            let arr = [...this.state.tasks, document.getElementById("task").value]
            this.setState({ tasks: arr })
        }
        return (
            <div>
                <h3>TO DO List</h3>
                <input id="task" placeholder="Enter Task"></input>
                <button onClick={call}>Add Task</button>
                <ol>
                    {this.state.tasks.map((item) => <li>{item}</li>)}   
                </ol>
            </div>
        )
    }
}


