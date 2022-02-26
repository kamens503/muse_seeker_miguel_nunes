import {useEffect, useState} from 'react'
import Card from '../components/Card'


const queryProducts = new Promise((resolve, reject) => {
    const products = [
    {
        id: 0,
        title: 'Manzana',
        description: 'Descripción de las manzanas',
        price: 200,
        pictureUrl: 'https://elegifruta.com.ar/onepage/wp-content/uploads/2017/07/manzana_roja.jpg'
    },
    {
        id: 21,
        title: 'Pera',
        description: 'Descripción de las peras',

        price: 350,
        pictureUrl: 'https://perfumesyfragancias.online/wp-content/uploads/2018/10/poire.jpg'
    },
    {
        id: 3,
        title: 'Naranja',
        description: 'Descripción de las naranjas',
        price: 28,
        pictureUrl: 'https://www.dieta-saludable.com/wp-content/uploads/2014/11/Propiedades-de-las-naranjas-740x431@2x.jpg'
    },
    {
        id: 40,
        title: 'Patillas',
        description: 'Descripción de las patillas',
        price: 80,
        pictureUrl: 'https://www.cocinayvino.com/wp-content/uploads/2017/01/semillasdepatilla.jpg'
    },
    ]
    setTimeout(() => {
        resolve (products)

    }, 2000);
})

const  queryMercadoProduct = async (query) => {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`),
          data = await response.json()

    return data
}

export default function ItemList () {

    const [products, setProducts] = useState([])

    useEffect( () => {
        queryMercadoProduct('pelotas').then(r => {
            console.log(r.results);
            setProducts(r.results)
        })
    }, [])


    return (
        <div className="flex flex-wrap -m-4">
            {products.map( 
                product => 
                    <Card titleName={product.title} 
                        subTitle={product.price}  
                        desc={product.available_quantity}
                        img= {product.thumbnail}
                        id={product.id}
                        key={product.id}
                    />
            )}
        </div>
    )
}