// import * as actionTypes from './actionTypes'
import {FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR ,ADD_TO_CART, REMOVE_FROM_CART, ADJUST_QTY, LOAD_CURRENT_ITEM}from './actionTypes'

// export const fetchProductsSuccess = (products) => {
//     return{
//         type: FETCH_PRODUCTS_SUCCESS,
//         products: products
//     }
// }

export const addToCart = (itemID) => {
    return{
        type: ADD_TO_CART,
        payload:{
            id: itemID,
        }
    }
}

export const removeFromCart = (itemID) => {
    return{
        type: REMOVE_FROM_CART,
        payload:{
            id: itemID,
        }
    }
}

export const adjustQty = (itemID, value) => {
    return{
        type: ADJUST_QTY,
        payload:{
            id: itemID,
            qty: value,
        }
    }
}

export const loadCurrentItem = (item) => {
    return{
        type: LOAD_CURRENT_ITEM,
        payload:{item}
    }
}