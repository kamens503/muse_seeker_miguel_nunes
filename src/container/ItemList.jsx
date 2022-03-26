import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import queryProducts from '../storage/firebaseClient'
import Card from '../components/Card'
import Loader from '../components/Loader'



export default function ItemList () {
    let { category } = useParams();
    const [products, setProducts] = useState([])

    useEffect( () => {
        queryProducts.then(r => {
            setProducts(r)
        })
    }, [])

    const getProductCard = () => {
        console.log(products);
        if (!products || !products[0] ) return <Loader />

        let _products = products

        if (category) { _products = products.filter(p => p.category === category)}
        
        return _products.map( 
            product => <Card {...product} key={product.id}/>
        )
    }


    return (
        <div className="flex flex-wrap -m-4">
            { getProductCard() }
        </div>
    )
}