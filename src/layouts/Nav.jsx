import { Link } from 'react-router-dom'
import CartWidget from '../components/CartWidget'

export default function Nav () {

    return (
        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
                <Link to="/" className="flex items-center mb-4 font-medium text-white title-font md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 p-2 text-white bg-red-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">Muse seeker</span>
                </Link>
                <nav className="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700">
                    <Link to="/" className="mr-5 hover:text-white">Productos</Link>
                    <Link to="/category/frutas" className="mr-5 hover:text-white">Frutas</Link>
                    <Link to="/category/zapatos" className="mr-5 hover:text-white">Zapatos</Link>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}


