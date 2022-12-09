const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;
const { default: axios } = require('axios')

// Action type
const GET_REQUEST = "GET_REQUEST";
const GET_DATA = "GET_DATA";
const GET_ERROR = "GET_ERROR";
// Initial state
const initialState = {
    isLoading: false,
    data: [],
    error: null
}

//Action
const getRequest = () => {
    return {
        type: GET_DATA
    }
}
const getData = (data) => {
    return {
        type: GET_DATA,
        payLoad: data
    }
}
const getError = (err) => {
    return {
        type: GET_DATA,
        payLoad: err
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case GET_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_DATA:
            return {
                ...state,
                data: action.payLoad,
                isLoading: false

            }
        case GET_ERROR:
            return {
                ...state,
                data: [],
                isLoading: false,
                error: action.payLoad
            }
        default:
            return state;
    }
}


// Data fetch
const fetchData = () => {
    return (dispatch) => {
        dispatch(getRequest());
        axios
            .get('https://dummyjson.com/todos')
            .then(res => {
                console.log(res.data)
                const result = res.data.map(item => item.title)
                dispatch(getData(result));
            })
            .catch(err => {
                console.log(err.message)
                dispatch(getError(err.message));
            })
    }
}


// Create store
const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(fetchData());

