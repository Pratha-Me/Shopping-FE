import {ADD_TO_CART, REMOVE_FROM_CART, ADJUST_QTY, LOAD_CURRENT_ITEM, FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR} from './actionTypes'

const INITIAL_STATE = {
    pending: false,
    error: null,
    products: [],
    cart: [],
    currentItem: null,
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        // case FETCH_PRODUCTS_PENDING:
        //     return {
        //         ...state,
        //         pending: true
        //     }
        // case FETCH_PRODUCTS_SUCCESS:
        //     return {
        //         ...state,
        //         pending: false,
        //         products: action.payload
        //     }
        // case FETCH_PRODUCTS_ERROR:
        //     return {
        //         ...state,
        //         pending: false,
        //         error: action.error
        //     }
        case ADD_TO_CART:
            // Get the items data from the products array
            const item = state.products.find(prod => prod.id === action.payload.id)
            // Check if Item is in cart already
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
            return{
                ...state,
                cart: inCart ? state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty +1} : item) : [...state.cart, {...item, qty:1}]
            }
        case REMOVE_FROM_CART:
            return{
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        case ADJUST_QTY:
            return{
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: action.payload.qty} : item)
            }
        case LOAD_CURRENT_ITEM:
            return{
                ...state,
                currentItem: action.payload
            }
        default:
            return {...state}
    }
}

export default shopReducer;