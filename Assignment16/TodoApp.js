import React, { Component } from 'react';

class TodoApp extends Component {
    constructor() {
        super();

        this.state = {
            task: '',
            tasks: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    handleChange(e) {
        this.setState({ task: e.target.value });
    }

    addTask() {
        if (this.state.task !== "") {
            this.setState({
                tasks: [...this.state.tasks, this.state.task],
                task: ''
            });
        }
    }

    render() {
        return (
            <div>
                <h2>To Do List</h2>

                <input
                    type="text"
                    value={this.state.task}
                    onChange={this.handleChange}
                    placeholder="Enter task"
                />

                <button onClick={this.addTask}>Add</button>

                <ol>
                    {this.state.tasks.map((t, index) => (
                        <li key={index}>{t}</li>
                    ))}
                </ol>
            </div>
        );
    }
}

export default TodoApp;