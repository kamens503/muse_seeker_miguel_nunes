import { AiOutlineShoppingCart } from '../../node_modules/react-icons/ai/';
import { Link } from 'react-router-dom';
import CartPreview from './CartPreview';

export default function CartWidget({ products, quantity }) {
	return (
		<div className='relative group'>
			<Link
				to='/cart'
				className='inline-flex items-center px-6 py-3 mt-4 text-base bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 md:mt-0'
			>
				<AiOutlineShoppingCart />
				<span className='ml-2'> Carrito {quantity}</span>
			</Link>
			<CartPreview products={products}/>
		</div>
	);
}
