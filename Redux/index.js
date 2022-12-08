const redux = require("redux");

// Create constant
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const ADD_USER = 'ADD_USER'


// Create initial state
const initialState = {
    count: 0,
    user: [{
        name: 'Abu Raihan'
    }]
}

// Actions
const IncrementCount = () => {
    return {
        type: INCREMENT
    }
}

const DecrementCount = () => {
    return {
        type: DECREMENT
    }
}

const Add_user = () => {
    return {
        type: ADD_USER,
        payload: {
            name: "Md. Abu Raihan Shakil"
        }
    }
}


// Create reducer function
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }

        case ADD_USER:
            return {
                ...state,
                user: [...state.user, action.payload]
            }

        default:
            return state;
    }
}


// Create store
const store = redux.createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(IncrementCount());
store.dispatch(DecrementCount());
store.dispatch(Add_user());






