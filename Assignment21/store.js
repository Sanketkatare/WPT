import { createStore } from 'redux';

// Initial state
const initialState = {
    todos: []
};

// Reducer
function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        default:
            return state;
    }
}

const store = createStore(todoReducer);

export default store;