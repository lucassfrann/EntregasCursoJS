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

function mostrarCarrito() {
    $(".carrito-li-p").slideDown();
}

function ocultarCarrito() {
    $(".carrito-li-p").slideUp();
}


function agregarProductoAlCarrito(producto) {
    Carrito.push(producto)
    let obJSON = JSON.stringify(Carrito)
    localStorage.setItem(`Productos`, obJSON)
    $(".carrito-productos").append(`<li class="productos-lista" style="background-color:white; text-decoration:none;" > Producto: ${producto.nombre} $${producto.precio}</li>`)
    $("#cantidad-productos").hide()
    actualizarPrecioFinal()
}

function actualizarPrecioFinal() {
    let p = document.querySelector(".carrito-preciofinal")
    let precioparcial = Carrito.map(producto => producto.precio).reduce((a, b) => a + b, 0)
    $(".carrito-preciofinal").text(`Total: ${precioparcial}`);
    return precioparcial
}

function vaciarCarrito() {
    localStorage.clear()
    Carrito.splice(0)
    $(".carrito-productos .productos-lista").detach()
    $(".carrito-preciofinal").text("")
    $("#cantidad-productos").show()
}

function arrCarrito(precio) {

}



//--------------------------------------------------CONDICIONALES Y DEMAS------------------------------//




let precios = $(".precio-producto");



for (let index = 0; index < precios.length; index++) {
    precios[index].innerHTML = `$${ListaProducto[index].precio}`
}

$("#carrito-image").click(mostrarCarrito)

$("#tacho").click(vaciarCarrito)

$("#ojos").click(ocultarCarrito)

for (let i = 0; i < ListaProducto.length; i++) {
    $(`.boton-agregar-producto-${i}`).click(() => agregarProductoAlCarrito(ListaProducto[i]))
}