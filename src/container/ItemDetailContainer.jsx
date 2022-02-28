import ItemDetail from '../components/ItemDetail' 
import {useEffect, useState} from 'react'
import queryProducts from '../utils/queryProducts'
import { useParams } from 'react-router-dom';



export default function ItemDetailContainer () {

    let { id } = useParams();
    const [products, setProducts] = useState([])

    useEffect( () => {
        queryProducts.then(r => {
            setProducts(r)
        })
    }, [])

    const getProductCard = () => {

        if (!products) return 'Cargando...'
        if( !id ) return 'Hubo un error en la carga del producto'
        return products.filter(p =>  p.id === parseInt(id))
                        .map( product => 
                            <ItemDetail 
                                category={product.category}
                                description={product.description}
                                title={product.title} 
                                pictureUrl={product.pictureUrl} 
                                price={product.price} 
                                id={product.id}
                                key={product.id}
                            />
                        )
    }

    
    return (
        <>
            {getProductCard()}
        </>
    )
}