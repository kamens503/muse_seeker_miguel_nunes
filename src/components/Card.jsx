import {Link} from 'react-router-dom'


export default function Card (props) {


    return(
        <Link to={`/item/${props.id}`} className="block p-4 xl:w-1/4 md:w-1/2">
            <div className="p-6 text-left bg-gray-800 rounded-lg bg-opacity-40">
            <img className="object-cover object-center w-full h-64 mb-6 rounded" 
                src={props.pictureUrl} 
                alt="content" 
            />
            <h2 className="mb-4 text-lg font-medium text-white title-font">{props.title}</h2>
            <p className="text-base leading-relaxed">{props.desc}</p>
            <h3 className="text-lg font-bold tracking-widest text-red-400 title-font">${props.price}</h3>
            </div>
        </Link>
    )
}