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
    // const ul = document.querySelector(".carrito-productos")
    // let li = document.createElement("li")
    // li.textContent = `Producto: ${producto.nombre} $ ${producto.precio}`
    // ul.appendChild(li)
    $(".carrito-productos").append(`<li> Prodcuto: ${producto.nombre} $${producto.precio}</li>`)
    actualizarPrecioFinal()
}

function actualizarPrecioFinal() {
    let p = document.querySelector(".carrito-preciofinal")
    let precioparcial = Carrito.map(producto => producto.precio).reduce((a, b) => a + b, 0)
    $(".carrito-preciofinal").append(`<p> Total: ${precioparcial} </p>`);
    return precioparcial
}

function vaciarCarrito() {
    localStorage.clear()
    Carrito.splice(0)
    // let ul = document.querySelector(".carrito-productos")
    // ul.innerHTML = ""
    // let total = document.querySelector(".carrito-preciofinal")
    $(".carrito-productos").innerHTML = ""
    $(".carrito-preciofinal").innerHTML = ""
}

function arrCarrito(precio) {

}



//--------------------------------------------------CONDICIONALES Y DEMAS------------------------------//


let botones = document.getElementsByClassName("boton-agregar-producto");

let tachocarrito = document.querySelector(".main-container-delete")

let precios = document.getElementsByClassName("precio-producto");

// let precios = $(".precio-producto")
// let tachocarrito = $(".main-container-delete")
// let botones = $(".boton-agregar-producto")



for (let index = 0; index < precios.length; index++) {
    precios[index].innerHTML = `$${ListaProducto[index].precio}`
}

tachocarrito.addEventListener("click", vaciarCarrito)

//$(".main-container-delete").on('click', vaciarCarrito)

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', () => agregarProductoAlCarrito(ListaProducto[i]));
    // $(`.botones${ListaProducto[i]}`).on('click', () => agregarProductoAlCarrito(ListaProducto[i]))
}