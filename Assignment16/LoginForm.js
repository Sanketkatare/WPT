import React, { Component } from 'react';

class LoginForm extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleLogin() {
        if (this.state.username === "iet" && this.state.password === "iet") {
            this.setState({ message: "Hello " + this.state.username });
        } else {
            this.setState({ message: "Invalid Credentials" });
        }
    }

    render() {
        return (
            <div>
                <h2>Login Form</h2>

                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={this.handleChange}
                /><br /><br />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                /><br /><br />

                <button onClick={this.handleLogin}>Login</button>

                <h3>{this.state.message}</h3>
            </div>
        );
    }
}

export default LoginForm;