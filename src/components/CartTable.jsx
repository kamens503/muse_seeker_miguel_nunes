export default function CartTable({ products }) {
	return (
		<table className='w-full'>
			<tr>
				<th></th>
				<th><p className="mb-5">Producto</p></th>
				<th><p className="mb-5">Cantidad</p></th>
				<th><p className="mb-5">Precio</p></th>
			</tr>
			{products.map((product) => {
				const { title, quantity, price, id, pictureUrl } = product;
				return (
					<tr key={id} className="border-y border-gray-700">
						<td className="w-40">
							<img className='w-20 h-20 m-5' src={pictureUrl} alt='' />
						</td>
						<td>{title}</td>
						<td>{quantity}</td>
						<td>{price}</td>
					</tr>
				);
			})}
		</table>
	);
}
