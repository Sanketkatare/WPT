import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Todo() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    const addTask = () => {
        dispatch({ type: 'ADD_TODO', payload: task });
        setTask("");
    };

    return (
        <div>
            <h2>Redux Todo</h2>

            <input value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={addTask}>Add</button>

            <ul>
                {todos.map((t, i) => (
                    <li key={i}>{t}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;