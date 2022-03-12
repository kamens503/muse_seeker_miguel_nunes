import CartContext from './context/cart/CartContext'
import {useState} from 'react'

export default function CartContentProvider({ props, children }) {
    const [cart, setCart] = useState({})
    function addItem (item){
        setCart(...cart, item)
    }
    return <CartContext.Provider value={{props}}>
        {children}
    </CartContext.Provider>
}