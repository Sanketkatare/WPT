import React, { Component } from 'react';

class LifecycleDemo extends Component {
    constructor() {
        super();
        this.state = { count: 0 };
        console.log("Constructor called");
    }

    componentDidMount() {
        console.log("Component Mounted");
    }

    componentDidUpdate() {
        console.log("Component Updated");
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

    render() {
        console.log("Render called");

        return (
            <div>
                <h2>Lifecycle Demo</h2>
                <h3>Count: {this.state.count}</h3>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Update
                </button>
            </div>
        );
    }
}

export default LifecycleDemo;