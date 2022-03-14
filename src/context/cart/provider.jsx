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
 * @param { number } amount - Valor por default (1)
 * 
 * @method removeItem v
 * @param { number } id
 * @param { number } amount - Valor por default (1)
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

    function isInCart(id) {
        return cart.products.find( product => product.id === id) ? true : false
    }

    const context = {
        cart,
        getProduct,
        isInCart,
        removeItem (id, amount = 1) {
            if(!isInCart(id)) {return}

            const _cart = cart
            const product = getProduct(id)
            _cart.quantity = _cart.quantity - amount

            if( product.quantity > 1 ) {
                const index = getProductIndex(id) 
                _cart.products[index].quantity = _cart.products[index].quantity - amount
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

        addItem (item, amount=1) {
            const _cart = cart
            _cart.quantity = _cart.quantity + amount


            if( isInCart(item.id) ){
                const index = getProductIndex(item.id) 
                _cart.products[index].quantity = _cart.products[index].quantity + amount
                setCart({...cart, _cart})
                console.log('Item de', item.title, 'añadido al carrito');
                return 
            }


            item.quantity = amount
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