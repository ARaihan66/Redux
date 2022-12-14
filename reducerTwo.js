const redux = require('redux');

// Constant 
const ADD_USER = 'ADD_USER';
const INCREMENT = 'INCREMENT';
const MULTIPLE_USER = 'MULTIPLE_USER';

// Initial State
const initialState = {
    name: ['Raihan'],
    count: 0
}

// Action
const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user,

    }
}

const incrementCount = (value) => {
    return {
        type: INCREMENT,
        payload: value
    }
}

const multipleUser = (user1, user2) => {
    return {
        type: MULTIPLE_USER,
        payload1: user1,
        payload2: user2
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                name: [...state.name, action.payload]
            }

        case INCREMENT:
            return {
                ...state,
                count: state.count + action.payload
            }

        case MULTIPLE_USER:
            return {
                ...state,
                name: [...state.name, action.payload1, action.payload2]
            }


        default:
            return state;
    }
}

// Create Store
const store = redux.createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addUser('Shakil'));
store.dispatch(incrementCount(5));
store.dispatch(multipleUser('Amrin', 'Sultana'));

