//--------------------------------------------------OBJETOS------------------------------//

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

//--------------------------------------------------FUNCIONES------------------------------//

function agregarProductoAlCarrito(producto) {
    Carrito.push(producto)
    let obJSON = JSON.stringify(Carrito)
    localStorage.setItem(`Productos`, obJSON)
    const ul = document.querySelector(".carrito-productos")
    let li = document.createElement("li")
    li.textContent = `Producto: ${producto.nombre} $ ${producto.precio}`
    ul.appendChild(li)
    actualizarPrecioFinal()
}

function actualizarPrecioFinal() {
    let p = document.querySelector(".carrito-preciofinal")
    p.innerHTML = ""
    let precioparcial = Carrito.map(producto => producto.precio).reduce((a, b) => a + b, 0)
    p.textContent = (`Total : ${precioparcial}`)
}

function vaciarCarrito() {
    localStorage.clear()
    let ul = document.querySelector(".carrito-productos")
    ul.innerHTML = ""
    let total = document.querySelector(".carrito-preciofinal")
    total.innerHTML = "0 productos"
}

function arrCarrito(precio) {

}



//--------------------------------------------------CONDICIONALES Y DEMAS------------------------------//


let botones = document.getElementsByClassName("boton-agregar-producto");

let tachocarrito = document.querySelector(".main-container-delete")

tachocarrito.addEventListener("click", vaciarCarrito)

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', () => agregarProductoAlCarrito(ListaProducto[i]));
}