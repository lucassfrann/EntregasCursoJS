//--------------------------------------------------OBJETOS------------------------------//

const ListaProducto = [{
        nombre: 'Polvo Matizador',
        stock: true,
        cantidadstock: 50,
        precio: 950,
        id: 1,
    },
    {
        nombre: 'Desamarillador',
        stock: true,
        cantidadstock: 50,
        precio: 500,
        id: 2,
    },
    {
        nombre: 'Cera Hairstyle',
        stock: true,
        cantidadstock: 50,
        precio: 930,
        id: 3,
    },
]

let Carrito = []

//--------------------------------------------------FUNCIONES------------------------------//

function agregarProductoAlCarrito(producto) {
    let newProducto = Carrito.find(productoEnCarrito => productoEnCarrito.id == producto.id);
    if (newProducto) {
        newProducto.cantidadencarrito++
        let cantidadhtml = document.getElementById(`cantidad-producto${newProducto.id}`)
        cantidadhtml.innerHTML = `x${newProducto.cantidadencarrito}`
    } else {
        newProducto = producto
        newProducto.cantidadencarrito = 1
        Carrito.push(newProducto)
        $(".carrito-productos").append(`<div class="contenerdor-productos-carrito" id="producto-${newProducto.id}">
            <li class="productos-lista" style="background-color:white; text-decoration:none;">${newProducto.nombre}</li>
            <p class="cantidad-productos" id="cantidad-producto${newProducto.id}">x${newProducto.cantidadencarrito}</p>
            <p>$${newProducto.precio}</p>
            <div><p class="boton-eliminar" id="boton-eliminar-${newProducto.id}">Eliminar</p></div>
            </div>`)
        $(`#boton-eliminar-${newProducto.id}`).click(() => {
            removerProducto(newProducto)
        })
    }

    let obJSON = JSON.stringify(Carrito)
    localStorage.setItem(`Productos`, obJSON)
    $("#cantidad-productos").hide()
    $("#finalizarpadre").show()
    actualizarPrecioFinal()
    prueba++
    productoAgregado(prueba)
}

function removerProducto(producto) {
    let index = Carrito.findIndex(productoEnCarrito => productoEnCarrito.id == producto.id);
    Carrito.splice(index, 1)
    document.getElementById(`producto-${producto.id}`).remove();
    actualizarPrecioFinal()
}

function actualizarPrecioFinal() {
    let p = document.querySelector(".carrito-preciofinal")
    let precioparcial = Carrito.map(producto => producto.precio * producto.cantidadencarrito).reduce((a, b) => a + b, 0)
    $(".carrito-preciofinal").text(`Total: ${precioparcial}`);
    return precioparcial
}

function vaciarCarrito() {
    for (let index = 0; index < Carrito.length; index++) {
        Carrito[index].cantidadencarrito = 1
    }
    localStorage.clear()
    Carrito.splice(0)
    finalizar = 0
    prueba = 0
    $('#contador-carrito').detach()
    $(".contenerdor-productos-carrito").detach()
    $(".carrito-preciofinal").text("")
    $("#cantidad-productos").show()
    $("#finalizarpadre").hide()
}

function finalizarCompra() {
    if (finalizar == 0) {
        for (let i = 0; i < Carrito.length; i++) {
            $('.modal-carrito').append(`<p class="modal-productos">${Carrito[i].nombre} x${Carrito[i].cantidadencarrito}</p>`)
        }
        let preciofinal = actualizarPrecioFinal()
        $('.modal-carrito').append(`<p class="modal-productos" id="modal-preciofinal">Total: ${preciofinal}</p>`)
        $("#finalizarpadre").hide()
        $("#tacho").hide()
        $('.hide-modal').show()
        finalizar = 1
    }
}

function productoAgregado(prueba) {
    if (prueba <= 1) {
        $('#carrito-image').append(`<p id='contador-carrito'>${prueba}</p>`)
    } else {
        let contador = document.getElementById('contador-carrito')
        contador.innerHTML = prueba
    }

}

function validarEmail() {
    let email = document.querySelector('.input-email').value

    let request = $.ajax({
        url: "https://api.eva.pingutil.com/email?email=" + email,
        method: "GET",
        timeout: 0,
        success: function (response) {
            if (response.status === "success") {
                console.log(response)
                alert("Muchas gracias por su compra, le enviamos un mail con todos los detalles!")
            } else {
                console.log(response)
                alert("Email no valido vuelva a ingresarlo")
            }
        },
    })
}

//--------------------------------------    ------------CONDICIONALES Y DEMAS------------------------------//

let prueba = 0

JSON.parse(localStorage.Productos || '[]').forEach(producto => agregarProductoAlCarrito(producto))

let precios = $(".precio-producto");

let cantproductos

let finalizar = 0


for (let index = 0; index < precios.length; index++) {
    precios[index].innerHTML = `$${ListaProducto[index].precio}`
}

$("#carrito-image").click(() => {
    $("#carrito-image").hide()
    $(".carrito-li-p").slideDown();
})

$("#tacho").click(vaciarCarrito)

$("#ocultar").click(() => {
    $(".carrito-li-p").slideUp();
    $("#carrito-image").show()
})

$("#finalizar").click(finalizarCompra)

$(".enviarmail-button").click(validarEmail)

$('.cancelarcompra-button').click(() => {
    $('.hide-modal').hide()
    $("#finalizarpadre").show()
    $("#tacho").show()
    $('.modal-carrito').text('')
    vaciarCarrito()
})

for (let i = 0; i < ListaProducto.length; i++) {
    $(`#boton-agregar-producto-${i}`).click(() => agregarProductoAlCarrito({
        ...ListaProducto[i]
    }))
}