import CartContext from './context'
import {useState} from 'react'


/**
 * Componente que maneja los los productos y las funcionalidades del carrito.
 * @property { object } cart - Contiente lista de productos y la cantidad.
 * @property { object } cart.products
 * @property { number } cart.quantity
 * 
 * @method addItem v
 * @param { object } item
 * @method removeItem v
 * @param { number } id
 * @method clearCart
 */
export default function CartContextProvider({ props, children }) {
    const [cart, setCart] = useState({ products:[], quantity: 0 })

    function getProduct(id) {
        return cart.products.find( product => product.id === id)
    }
    function getProductIndex(id){
        return cart.products.findIndex( product => product.id === id)
    }

    const context = {
        cart,

        removeItem (id) {
            const _cart = cart
            const product = getProduct(id)
            _cart.quantity--
            if( product?.quantity > 1 ) {
                const index = getProductIndex(id) 
                _cart.products[index].quantity--
                setCart({...cart, _cart})
                console.log('Se ha quitado un item de', product.name, 'del carrito');
                return
            }
            setCart({ 
                    products: [_cart.products.filter( product => product.id === id)], 
                    quantity: _cart.quantity 
                })
            console.log('Se ha borrado product del carrito');
        },

        addItem (item) {
            const _cart = cart
            _cart.quantity++
            if( getProduct(item.id) ){
                const index = getProductIndex(item.id) 
                _cart.products[index].quantity++
                setCart({...cart, _cart})
                console.log('Item de', item.title, 'añadido al carrito');
                return 
            }
            _cart.products.push(item)
            setCart({...cart, _cart})
            console.log(item.title, 'añadido al carrito');
        },

        clearCart () {
            setCart({ products:[], quantity: 0 })
            console.log('Carrito limpiado');
        }
    }
    return <CartContext.Provider value={context}>
        {children}
    </CartContext.Provider>
}