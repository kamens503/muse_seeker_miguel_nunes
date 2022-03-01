import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react'

import queryProducts from '../utils/queryProducts'
import ItemDetail from '../components/ItemDetail' 
import Loader from '../components/Loader';



export default function ItemDetailContainer () {

    let { id } = useParams();
    const [products, setProducts] = useState([])

    useEffect( () => {
        queryProducts.then(r => {
            setProducts(r)
        })
    }, [])

    const getProductCard = () => {

        if (!products || !products[0] ) return <Loader />

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