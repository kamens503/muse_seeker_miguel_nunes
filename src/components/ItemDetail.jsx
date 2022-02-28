export default function ItemDetail ({title, description, price, pictureUrl, category}) {
    return (
        <section className="overflow-hidden text-left text-gray-400 bg-gray-900 body-font">
            <div className="container h-full px-5 py-24 mx-auto">
                <div className="flex mx-auto lg:w-4/5 flexWrap">
                <div className="w-full mb-6 lg:w-1/2 lg:pr-10 lg:py-6 lg:mb-0">
                    <h2 className="text-sm text-gray-500 title-font trackingWidest">{category}</h2>
                    <h1 className="mb-4 text-3xl font-medium textWhite title-font">{title}</h1>
                    <div className="flex mb-4">
                    <a className="flex-grow px-1 py-2 text-indigo-400 border-b-2 border-indigo-500 textLg">Descripción</a>
                    <a className="flex-grow px-1 py-2 border-b-2 border-gray-800 textLg">Comentarios</a>
                    <a className="flex-grow px-1 py-2 border-b-2 border-gray-800 textLg">Detalles</a>
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
                    <div className="flex py-2 mb-6 border-t border-b border-gray-800">
                    <span className="text-gray-500">En stock</span>
                    <span className="ml-auto textWhite">99</span>
                    </div>
                    <div className="flex">
                    <span className="text-2xl font-medium title-font textWhite">${price}</span>
                    <button className="flex px-6 py-2 ml-auto bg-indigo-500 border-0 rounded textWhite focus:outline-none hover:bg-indigo-600">Comprar</button>
                    <button className="inline-flex items-center justify-center w-10 h-10 p-0 ml-4 text-gray-500 bg-gray-800 border-0 rounded-full">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                        </svg>
                    </button>
                    </div>
                </div>
                <img alt="ecommerce" className="object-cover object-center w-full rounded h-62 lg:w-1/2 lg:h-96" src={pictureUrl} />
                </div>
            </div>
            </section>
    )
}