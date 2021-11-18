const ListaProducto = [{
        nombre: 'Polvo Matizador',
        stock: true,
        cantidadstock: 50,
        precio: 950
    },
    {
        nombre: 'Desamarillador',
        stock: true,
        cantidadstock: 50,
        precio: 500
    },
    {
        nombre: 'Cera Hairstyle',
        stock: true,
        cantidadstock: 50,
        precio: 930
    },
]

let Carrito = []

function agregarProductoAlCarrito(producto) {
    Carrito.push(producto)
    let obJSON = JSON.stringify(Carrito)
    localStorage.setItem(`Productos`, obJSON)
    const ul = document.querySelector(".carrito-productos")
    let li = document.createElement("li")
    li.textContent = `Producto: ${producto.nombre} $ ${producto.precio}`
    ul.appendChild(li)
}

function actualizarPrecioFinal() {
    let p = document.querySelector(".carrito-preciofinal")
    p.innerHTML = ""
    let precioparcial = Carrito.map(producto => producto.precio).reduce((a, b) => a + b, 0)
    p.textContent = (`Total : ${precioparcial}`)
}

function arrcarrito(precio) {

}

if (localStorage.Productos) {
    const carritoInicial = JSON.parse(localStorage.Productos);
    carritoInicial.forEach(producto => agregarProductoAlCarrito(producto))
    actualizarPrecioFinal()
}

let opcionproducto = Number(prompt(`Bienvenido a Five Barber, que producto desea comprar? Escriba el numero de opcion
1-Polvo matizador
2-Desamarillador
3-Cera Hairstyle
4-Salir`))

let opcionwhile = true;
let i
let k = 0
do {
    k++
    switch (opcionproducto) {
        case 1:
        case 2:
        case 3:
            const producto = ListaProducto[opcionproducto - 1]
            alert(`Excelente decision!, El precio del producto es de ${ListaProducto[0].precio}`)
            agregarProductoAlCarrito(producto);
            actualizarPrecioFinal(opcionwhile);
            break;

        default:
            opcionwhile = 0
            break;
    }

    if (opcionproducto !== 4) {
        opcionwhile = 0
        opcionwhile = Number(prompt(`Desea agregar otro producto al carrito? Elija el numero de opcion
    1-Si
    2-No`))

        if (opcionwhile == 1) {
            opcionproducto = Number(prompt(`Que producto desea agregar al carrito? Escriba el numero de opcion
        1-Polvo matizador
        2-Desamarillador
        3-Cera Hairstyle
        4-Salir`))
        }
    }


} while (opcionwhile == 1);

alert('Gracias por su compra en Five Barber')