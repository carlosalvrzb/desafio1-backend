class ProductManager {
    constructor() {
        this.events = []
    }


    generadorIds = () => {
        const count = this.events.length
        if (count === 0) {
            return 1
        } else {
            return (this.events[count-1].id) + 1
        }
    }


    getEvents = () => {
        return this.events
    }


    addEvent = (title, description, price, thumbnail, code, stock) => {
        const id = this.generadorIds()
        //validar que los 6 parámetros sean obligatorios
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("El producto no puede ser agregado porque faltan datos");
            return
        }
        //Para validar que "code" no está repetido
        if (this.events.find(elem => elem.code === code)) {
            // throw new Error("El producto ya existe");
            console.error("El producto no puede ser agregado porque el CODE ya existe");
            return
        }
        this.events.push({
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        })
    }
}

const productManager = new ProductManager()
productManager.addEvent('Stripes', 'playera rayada de blanco y negro', 350, 'https://m.media-amazon.com/images/I/51IKhmEXcjL._AC_SX569_.jpg', '101010', 30)
// console.log(productManager.getEvents())
productManager.addEvent('Levis Black', 'playera negra con logo rojo de levis',550, 'https://cdn.shopify.com/s/files/1/0366/8626/6503/products/1778301375_600x600.png?v=1599697326', '101011', 25)
console.log(productManager.getEvents())

