const { createStore, applyMiddleware } = require('redux');
const { default: logger } = require('redux-logger')

// Contant
const ADD_USER = 'ADD_USER';

// Initial state
const initialState = {
    user: ["Abu"]
}

// Action
const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                user: [...state.user, action.payload]
            }

        default:
            return state
    }
}

// Create store
const store = createStore(reducer, applyMiddleware(logger));

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addUser('Shakil'));