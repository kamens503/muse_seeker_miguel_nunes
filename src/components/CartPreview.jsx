import { Link } from 'react-router-dom'
import { CartContext } from '../context/cart/provider'
import { useContext } from 'react'


function RemoveFromCart ({ id, quantity }) {
    const cartContext = useContext(CartContext)
    function removeItemFromCart () {    
        console.log({id, quantity});    
        cartContext.removeItem(id,quantity)
    }

    return <button onClick={removeItemFromCart} className="inline-flex items-center justify-center w-6 h-6 p-0 ml-4 text-white bg-red-700 border-0 rounded-full font-bold text-xs">X</button>
}
export default function CartPreview ({ products }) {
    if (products.length < 1) { return '' }
    return (
        <div className=''>
				<span className='w-full h-3 block'></span>
				<div className='opacity-100 h-auto duration-150 overflow-hidden transition h-1 bg-gray-800 border border-gray-600 block absolute w-96 mr-auto right-0 group-hover:opacity-100 group-hover:h-auto'>
					{products.map((p) => {
                        console.log({quantity : p.quantity});
                        if(!p.quantity) return ''
						return (
							<div
								className='border-b border-gray-600 p-5 text-left flex justify-evenly items-center'
								key={p.id}
							>
								<img
									className='w-20 inline ml-0 mr-5'
									src={p.pictureUrl}
								/>
								<p className='inline-block'>{p.title}</p>
								<p className='inline mx-auto'>{p.quantity}</p>
                                <RemoveFromCart id={ p.id } quantity={ p.quantity }/>
                                
							</div>
						);
					})}
                    <Link to='/cart' className='text-indigo-400'> Ver todos los productos</Link>
				</div>
			</div>
    )
}