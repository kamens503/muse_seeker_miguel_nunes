function Counter({itemsInCart}){
    if (!itemsInCart) return ''

    return (
        <div className="flex py-2 mb-6">
            <span className="text-white">Añadido al carrito</span>
            <span className="ml-auto textWhite">
                {itemsInCart}
            </span>
        </div>
    )
}


export default function ItemCount({stock, itemsInCart}) {

    return (
        <>
            <div className="flex py-2 mb-6 border-t border-b border-gray-800">
                <span className="text-white">Stock</span>
                <span className="ml-auto textWhite">
                    {stock}
                </span>
            </div>
            <Counter itemsInCart={itemsInCart} />
        </>
)
}