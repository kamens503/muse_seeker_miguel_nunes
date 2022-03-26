import { CartContext } from '../context/cart/provider'
import ItemCount from './ItemCount'
import AddProductBtn from './AddProductBtn'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

function GoToCart({productInCart}) {
    if (!productInCart || productInCart?.quantity ) return ''

    return (
        <div className="flex py-4 border-t border-gray-800">
            <Link to='/cart' className='flex px-6 py-2 m-auto  border-0 rounded focus:outline-none hover:bg-green-600 bg-green-500 text-white'> Completar Compra</Link>  
        </div>
    )
}
export default function ItemDetail (props) {
    const {title, description, price, pictureUrl, category, id, stock} = props
    const cartContext = useContext(CartContext)
    const productInCart = cartContext.getProduct(id)

    console.log(stock);
    

    
    return (
        <section className="overflow-hidden text-left text-gray-400 bg-gray-900 body-font">
            <div className="container h-full px-5 py-24 mx-auto">
                <div className="flex mx-auto lg:w-4/5 flexWrap">
                    <div className="w-full mb-6 lg:w-1/2 lg:pr-10 lg:py-6 lg:mb-0">
                        <h2 className="text-sm text-gray-500 title-font trackingWidest">{category}</h2>
                        <h1 className="mb-4 text-3xl font-medium textWhite title-font">{title}</h1>
                        <div className="flex mb-4">
                            <button className="flex-grow px-1 py-2 text-indigo-400 border-b-2 border-indigo-500 textLg">Descripción</button>
                            <button className="flex-grow px-1 py-2 border-b-2 border-gray-800 textLg">Comentarios</button>
                            <button className="flex-grow px-1 py-2 border-b-2 border-gray-800 textLg">Detalles</button>
                        </div>
                        <p className="mb-4 leading-relaxed">{description}</p>
                        <div className="flex py-2 border-t border-gray-800">
                            <span className="text-gray-500">Color</span>
                            <span className="ml-auto textWhite">-</span>
                        </div>
                        <div className="flex py-2 border-t border-gray-800">
                            <span className="text-gray-500">Tamaño</span>
                            <span className="ml-auto textWhite">-</span>
                        </div>
                        <ItemCount 
                            stock={cartContext.isInCart(id) ? stock - productInCart.quantity : stock} 
                            itemsInCart={productInCart ? productInCart?.quantity : false}
                        />

                        <div className="flex mb-4">
                            <span className="text-2xl font-medium title-font textWhite">${price}</span>
                            <AddProductBtn {...props} />
                            
                        </div>
                        <GoToCart productInCart={cartContext.isInCart(id)}/>
                    </div>
                    <img alt="ecommerce" className="object-cover object-center w-full rounded h-62 lg:w-1/2 lg:h-96" src={pictureUrl} />
                </div>
            </div>
        </section>
    )
}