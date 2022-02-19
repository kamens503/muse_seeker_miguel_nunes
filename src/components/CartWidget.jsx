import { AiOutlineShoppingCart } from "../../node_modules/react-icons/ai/"

export default function CartWidget () {
    return (
            <button class="inline-flex items-center bg-gray-800 border-0 py-3 px-6 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                <AiOutlineShoppingCart />
                <span class="ml-2"> Carrito </span>
            </button>
        )
}