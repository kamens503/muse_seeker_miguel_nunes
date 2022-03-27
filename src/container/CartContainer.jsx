import { useContext } from 'react';
import { CartContext } from '../context/cart/provider';
import CartTable from '../components/CartTable';

export default function CartContainer() {
	const context = useContext(CartContext);
	const products = context.cart.products;
	return (
		<section className='text-left text-gray-400 bg-gray-900 body-font'>
			<div className='container px-5 py-24 mx-auto'>
				<h1 className='text-2xl font-medium text-white sm:text-3xl title-font mb-5'>
					Carrito
				</h1>
				<section className='flex'>
					<div className='cart-wrapper bg-gray-800 p-10 w-2/3 inline-block'>
						{products.length > 0 ? (
							<CartTable products={products}></CartTable>
						) : (
							<p>No hay productos en tu carrito</p>
						)}
					</div>
                    {products.length > 0 ? (
                        <div className='bg-gray-800 p-10 w-80 inline-block m-5 mt-0 h-full'>
						<p className='text-white text-lg font-bold'>
							Total:{' '}
							{products.length > 0
								? products.reduce((lastProduct, product) => {
										return (
											lastProduct.price * lastProduct.quantity +
											product.price * product.quantity
										);
                                })
								: 0}
						</p>
                        <button className='flex px-6 py-2 mt-5  border-0 rounded focus:outline-none hover:bg-indigo-600 bg-indigo-500 text-white'>Finalizar Compra</button>
					</div>
                    ): '' }
					
				</section>
			</div>
		</section>
	);
}
