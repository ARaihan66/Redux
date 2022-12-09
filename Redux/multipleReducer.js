const { combineReducers, createStore } = require('redux');

// Product constant
const GET_ALL_PRODUCT = "GET_ALL_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";

//Card constant
const GET_ALL_CART = "GET_ALL_CART";
const ADD_CART = "ADD_CART";

// Product initial state
const productInitialState = {
    product: ['Apple', 'Samsung', 'Vivo'],
    numberOfProduct: 3
}

// Card initial state
const cartInitialState = {
    cart: ['Banana'],
    numberOfProduct: 1
}

//Product action 
const getAllProduct = () => {
    return {
        type: GET_ALL_PRODUCT
    }
}

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

//Cart action 
const getAllCart = () => {
    return {
        type: GET_ALL_CART
    }
}

const addCart = (product) => {
    return {
        type: ADD_CART,
        payload: product
    }
}

//Product reducer
const productReducer = (state = productInitialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            return {
                ...state
            }

        case ADD_PRODUCT:
            return {
                product: [...state.product, action.payload],
                numberOfProduct: state.numberOfProduct + 1
            }

        default:
            return state;
    }
}

//Cart reducer
const cartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case GET_ALL_CART:
            return {
                ...state
            }

        case ADD_CART:
            return {
                cart: [...state.cart, action.payload],
                numberOfProduct: state.numberOfProduct + 1
            }
        default:
            return state;
    }
}

// Create combine reducer
const rootReducer = combineReducers({
    productReducer,
    cartReducer
})

// Create store
const store = createStore(rootReducer);


store.subscribe(() => {
    console.log(store.getState());
})

// Action dispacthing
store.dispatch(getAllProduct());
store.dispatch(addProduct('Symphony'));
store.dispatch(getAllCart());
store.dispatch(addCart('Mango'));
