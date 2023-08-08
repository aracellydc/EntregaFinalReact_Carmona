export const productos = [
    {
        id:"1", 
        nombre: "Producto 1",
        precio: 20,
        stock: 15,
        categoria: "polos",
        description: "Descripcion 1",
        img: 'https://textilesalbiram.com/wp-content/uploads/2023/02/IMG_20221013_212947-2-min.jpg'
    }, 
    {
        id:"2", 
        nombre: "Producto 2",
        precio: 20,
        stock: 15,
        categoria: "polos",
        description: "Descripcion 2",
        img: 'https://textilesalbiram.com/wp-content/uploads/2023/07/IMG_7221-1-1-min.jpg'
    },
    {
        id:"3", 
        nombre: "Producto 3",
        precio: 20,
        stock: 15,
        categoria: "polos",
        description: "Descripcion 3",
        img: 'https://textilesalbiram.com/wp-content/uploads/2023/02/IMG_20220829_184040-1-min.jpg'
    },
    {
        id:"4", 
        nombre: "Producto 4",
        precio: 20,
        stock: 15,
        categoria: "polos",
        description: "Descripcion 4",
        img: 'https://textilesalbiram.com/wp-content/uploads/2023/02/IMG_3076-60-1-min.jpg'
    },
    {
        id:"5", 
        nombre: "Producto 5",
        precio: 20,
        stock: 15,
        categoria: "blusas",
        description: "Descripcion 5",
        img: 'https://textilesalbiram.com/wp-content/uploads/2023/02/IMG_4991-2-min.jpg'
    }, 
    {
        id:"6", 
        nombre: "Producto 6",
        precio: 20,
        stock: 15,
        categoria: "blusas",
        description: "Descripcion 6",
        img: '  https://textilesalbiram.com/wp-content/uploads/2023/02/IMG_4956-2-min.jpg'
    },
    {
        id:"7", 
        nombre: "Producto 7",
        precio: 20,
        stock: 15,
        categoria: "joggers",
        description: "Descripcion 7",
        img: 'https://textilesalbiram.com/wp-content/uploads/2023/02/PicsArt_11-03-01.59.51-min.jpg'
    },
    {
        id:"8", 
        nombre: "Producto 8",
        precio: 20,
        stock: 15,
        categoria: "joggers",
        description: "Descripcion 8",
        img: 'https://textilesalbiram.com/wp-content/uploads/2023/02/WhatsApp-Image-2021-11-03-at-9.02.58-PM-min.jpg'
    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(productos)
        }, 400)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id));
        }, 400)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productsCategory = productos.filter(prod => prod.categoria === productCategory);
            resolve (productsCategory)
        }, 500);
    })
}