import React from 'react'

/**
 * @property { object }  cart - Contiente lista de productos y la cantidad.
 * @property { object } cart.products
 * @property { number } cart.quantity
 * 
 * @method addItem v
 * @param { object } item
 * @param { number } amount
 * @method removeItem v
 * @param { number } id
 * @method clearCart
 */
export default React.createContext({
    cart:{
        products:[],
        quantity: 0
    },
    addItem({title,price,pictureUrl,category},amount=1){},
    removeItem(id, amount = 1){},
    clearCart(){}
});