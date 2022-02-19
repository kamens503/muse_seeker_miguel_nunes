import Card from '../components/Card'

export default function ItemListContainer () {
    const greeting = "Bienvenido a la tienda"
    return (
        <>
            <section class="text-gray-400 body-font bg-gray-900 text-left">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap w-full mb-20">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">{greeting}</h1>
                    <div class="h-1 w-20 bg-red-500 rounded"></div>
                </div>
                <p class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
                    Entrega final para el proyecto Eccomerce de React Js Coder House
                </p>
                </div>
                <div class="flex flex-wrap -m-4">
                    <Card titleName="Producto" subTitle="Categoría" desc="Producto de prueba"/>
                    <Card titleName="Producto" subTitle="Categoría" desc="Producto de prueba"/>
                    <Card titleName="Producto" subTitle="Categoría" desc="Producto de prueba"/>
                    <Card titleName="Producto" subTitle="Categoría" desc="Producto de prueba"/>
                </div>
            </div>
            </section>
        </>
    )
}