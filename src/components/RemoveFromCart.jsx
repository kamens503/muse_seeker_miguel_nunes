import { useContext } from 'react';
import { CartContext } from '../context/cart/provider';

export default function RemoveFromCart({ id, quantity }) {
	const cartContext = useContext(CartContext);
	function removeItemFromCart() {
		cartContext.removeItem(id, quantity);
	}

	return (
		<button
			onClick={removeItemFromCart}
			className='inline-flex items-center justify-center w-6 h-6 p-0 ml-4 text-white bg-red-700 border-0 rounded-full font-bold text-xs'
		>
			X
		</button>
	);
}
