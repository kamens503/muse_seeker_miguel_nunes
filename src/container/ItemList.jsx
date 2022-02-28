import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import queryProducts from '../utils/queryProducts'



export default function ItemList () {
    let { category } = useParams();
    const [products, setProducts] = useState([])

    useEffect( () => {
        queryProducts.then(r => {
            console.log(r);
            setProducts(r)
        })
    }, [])

    const getProductCard = () => {

        if(!products) return

        let _products = products

        if (category) { _products = products.filter(p => p.category === category)}
        
        return _products.map( 
            product => <Card titleName={product.title} 
                            price={product.price}  
                            desc={product.available_quantity}
                            img= {product.pictureUrl}
                            id={product.id}
                            category={product.category}
                            key={product.id}
            />
        )
    }


    return (
        <div className="flex flex-wrap -m-4">
            { getProductCard() }
        </div>
    )
}