import RemoveFromCart from './RemoveFromCart';

function ProductColumn({ product }) {
	console.log(product);
	const { id, title, pictureUrl, price, quantity } = product;

	return (
		<tr className='border-y border-gray-700'>
			<td className='w-40'>
				<img className='w-20 h-20 m-5' src={pictureUrl} alt='' />
			</td>
			<td>{title}</td>
			<td>{quantity}</td>
			<td>{price}</td>
			<td>
				<RemoveFromCart id={id} quantity={quantity} />
			</td>
		</tr>
	);
}

export default function CartTable({ products }) {
	return (
		<table className='w-full'>
			<thead>
				<tr>
					<th></th>
					<th>
						<p className='mb-5'>Producto</p>
					</th>
					<th>
						<p className='mb-5'>Cantidad</p>
					</th>
					<th>
						<p className='mb-5'>Precio</p>
					</th>
					<th>
						<p className='mb-5'>Borrar</p>
					</th>
				</tr>
			</thead>
			<tbody>
				{products.map((product) => {
					return <ProductColumn product={product} key={product.key} />;
				})}
			</tbody>
		</table>
	);
}
