import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from './UserContext';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(UserContext);

    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === "iet" && password === "iet") {
            setUser(username);
            navigate('/home');
        } else {
            alert("Invalid Credentials");
        }
    };

    return (
        <div>
            <h2>Login</h2>

            <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;