export default new Promise((resolve, reject) => {
    const products = [
        {
            id: 0,
            title: 'Manzana',
            category: 'frutas',
            description: 'Descripción de las manzanas',
            price: 200,
            pictureUrl: 'https://elegifruta.com.ar/onepage/wp-content/uploads/2017/07/manzana_roja.jpg',
            stock: 5,
        },
        {
            id: 1,
            title: 'Pera',
            description: 'Descripción de las peras',
            category: 'frutas',
            price: 350,
            pictureUrl: 'https://perfumesyfragancias.online/wp-content/uploads/2018/10/poire.jpg',
            stock: 5,
        },
        {
            id: 2,
            category: 'frutas',
            title: 'Naranja',
            description: 'Descripción de las naranjas',
            price: 28,
            pictureUrl: 'https://www.dieta-saludable.com/wp-content/uploads/2014/11/Propiedades-de-las-naranjas-740x431@2x.jpg',
            stock: 5,
        },
        {
            id: 3,
            category: 'frutas',
            title: 'Patillas',
            description: 'Descripción de las patillas',
            price: 80,
            pictureUrl: 'https://www.cocinayvino.com/wp-content/uploads/2017/01/semillasdepatilla.jpg',
            stock: 5,
        },
        {
            id: 4,
            title: 'adidas',
            description: 'Descripción de zapatos adidas',
            price: 3202,
            category: 'zapatos',
            pictureUrl: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/31890fc8a64c4704aa89a9c300d00ea3_9366/Zapatillas_U_Path_Run_Negro_G27639_01_standard.jpg',
            stock: 5,
        },
        {
            id: 5,
            category: 'zapatos',
            title: 'Nike',
            description: 'Descripción de zapatos Nike',
            price: 5202,
            pictureUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/calzado-blazer-mid-77-vintage-nw30B2.png',
            stock: 5,
        }
    ]
    setTimeout(() => {
        resolve (products)

    }, 2000);
})