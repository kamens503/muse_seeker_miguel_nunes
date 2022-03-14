import CartContext from '../context/cart/context'
import React, { useContext, useEffect, useState } from 'react'


const disabled = {
    style:'bg-indigo-200 text-indigo-400 hover:bg-indigo-200',
    msg:'Producto sin stock'
}
const active = {
    style: 'hover:bg-indigo-600 bg-indigo-500 text-white',
    msg: 'Añadir al carrito'
}



export default function AddProductBtn ({title,price,pictureUrl,category, id, stock}) {
    const cartContext = useContext(CartContext)
    const [outOfStock, setOutOfStock] = useState(false)


    function DeleteOneItemFromCart () {
    
        function removeItemFromCart () {        
            cartContext.removeItem(id)
        }
    
        if (!cartContext.isInCart(id)) return ''
        return <button onClick={removeItemFromCart} className="inline-flex items-center justify-center w-10 h-10 p-0 ml-4 text-white bg-red-700 border-0 rounded-full font-extrabold">X</button>
    }


    useEffect(() => {
      if(cartContext.getProduct(id)?.quantity - stock >= 0 ) setOutOfStock(true)
    }, [cartContext, id, stock])
    

    function addProductHandler () {
        if(outOfStock) return

        cartContext.addItem({title,price,pictureUrl,category, id})
    }

    

    return (
        <>
        <button 
            onClick={addProductHandler} 
            className={`flex px-6 py-2 ml-auto  border-0 rounded focus:outline-none ${outOfStock ? disabled.style : active.style}`}
        disabled={outOfStock ? true : ''}>
            {outOfStock ? disabled.msg : active.msg}
        </button>
        <DeleteOneItemFromCart />
        </>
        )
}