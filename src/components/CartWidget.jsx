import { AiOutlineShoppingCart } from "../../node_modules/react-icons/ai/"

export default function CartWidget () {
    return (
            <button className="inline-flex items-center px-6 py-3 mt-4 text-base bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 md:mt-0">
                <AiOutlineShoppingCart />
                <span className="ml-2"> Carrito </span>
            </button>
        )
}