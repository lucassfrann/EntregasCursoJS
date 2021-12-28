//--------------------------------------------------OBJETOS------------------------------//

const ListaProducto = [{
        nombre: 'Polvo Matizador',
        stock: true,
        cantidadstock: 50,
        precio: 950,
        cantidadencarrito: 0,
        id: 1
    },
    {
        nombre: 'Desamarillador',
        stock: true,
        cantidadstock: 50,
        precio: 500,
        cantidadencarrito: 0,
        id: 2
    },
    {
        nombre: 'Cera Hairstyle',
        stock: true,
        cantidadstock: 50,
        precio: 930,
        cantidadencarrito: 0,
        id: 3
    },
]

let Carrito = []

//--------------------------------------------------FUNCIONES------------------------------//

function mostrarCarrito() {
    $(".carrito-li-p").slideDown();
    $("#carrito-image").hide()
}

function ocultarCarrito() {
    $(".carrito-li-p").slideUp();
    $("#carrito-image").show()
}

function resetearCarrito() {

}

function agregarProductoAlCarrito(producto) {
    Carrito.push(producto)
    let obJSON = JSON.stringify(Carrito)
    localStorage.setItem(`Productos`, obJSON)
    $(".carrito-productos").append(`<li class="productos-lista" style="background-color:white; text-decoration:none;" > Producto: ${producto.nombre} $${producto.precio}</li>`)
    $("#cantidad-productos").hide()
    $("#finalizarpadre").show()
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

function finalizarCompra() {
    if (finalizar == 0) {
        $("#finalizar").hide()
        $("#tacho").hide()
        $(".container-carrito").append(`<p id="finalizar-text">Dejanos tu mail para contactarnos!</p>`)
        $(".container-carrito").append(`<input id="finalizar-input" placeholder="E-mail"></input>`)
        $(".container-carrito").append(`<p id="finalizar-boton">Enviar</p>`)
        finalizar = 1
    }
}

function validarEmail() {
    let key = '965b2431f1a82289a54552e94b4afddd'
    let email = $("finalizar-input").val()
    console.log(email)
    $.ajax({
        method: GET,
        url: 'http://apilayer.net/api/check?access_key=' + key + '&email=' + email,
        dataType: 'jsonp',
        success: function(json) {
            console.log(json.format_valid);
            console.log(json.smtp_check);
            console.log(json.score);
            alert('Datos enviados')
        }
    }
    )
}
    


//--------------------------------------------------CONDICIONALES Y DEMAS------------------------------//




let precios = $(".precio-producto");

let cantproductos 

let finalizar = 0


for (let index = 0; index < precios.length; index++) {
    precios[index].innerHTML = `$${ListaProducto[index].precio}`
}

$("#carrito-image").click(mostrarCarrito)

$("#tacho").click(vaciarCarrito)

$("#ocultar").click(ocultarCarrito)

$("#finalizar").click(finalizarCompra)

$("#finalizar-boton").click(validarEmail)

for (let i = 0; i < ListaProducto.length; i++) {
    $(`#boton-agregar-producto-${i}`).click(() => agregarProductoAlCarrito(ListaProducto[i]))
}