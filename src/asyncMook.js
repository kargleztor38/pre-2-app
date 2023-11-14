const products = [
    {id: 1, name:'Arte negro', category:'Camiseta', precio: 25, stock: 10, img:'../public/assets/1.png', description:'Un producto confeccionado a mano.'},
    {id: 2, name:'Arte blanco', category:'Camiseta', precio: 25, stock: 10, img:'../public/assets/2.png', description:'Un producto confeccionado a mano.'},
    {id: 3, name:'Arte verde', category:'Camiseta', precio: 25, stock: 10, img:'../public/assets/3.png', description:'Un producto confeccionado a mano.'},
    {id: 4, name:'Camisas ocacionales', category:'Camisas', precio: 30, stock: 10, img:'../public/assets/4.png', description:'Camisas para una ocacion especial.'},
    {id: 5, name:'Camisas ocacionales', category:'Camisas', precio:30, stock: 10, img:'../public/assets/5.png', description:'Camisas para una ocacion especial.'},
    {id: 6, name:'Camisas ocacionales', category:'Camisas', precio: 30, stock: 10, img:'../public/assets/6.png', description:'Camisas para una ocacion especial.'},
    {id: 7, name:'Cuadros de ', category:'Cuadros', precio: 85, stock: 8, img:'../public/assets/7.png', description:'Cuadros hechos con tecnica artesanal.'},
    {id: 8, name:'Cuadros de tela', category:'Cuadros', precio: 85, stock: 8, img:'../public/assets/8.png', description:'Cuadros hechos con tecnica artesanal.'},
    {id: 9, name:'Cuadros de tela', category:'Cuadros', precio: 85, stock: 8, img:'../public/assets/9.png', description:'Cuadros hechos con tecnica artesanal.'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsId = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}