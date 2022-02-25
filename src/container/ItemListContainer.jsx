import ItemList from './ItemList'


export default function ItemListContainer (props) {
    return (
        <>
            <section className="text-left text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                <div className="w-full mb-6 lg:w-1/2 lg:mb-0">
                    <h1 className="mb-2 text-2xl font-medium text-white sm:text-3xl title-font">{props.greeting}</h1>
                    <div className="w-20 h-1 bg-red-500 rounded"></div>
                </div>
                <p className="w-full leading-relaxed text-gray-400 lg:w-1/2 text-opacity-90">
                    Entrega final para el proyecto Eccomerce de React Js Coder House
                </p>
                </div>
                <ItemList />
            </div>
            </section>
        </>
    )
}