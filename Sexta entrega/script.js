let producto_modif = {

}

const ListaProducto = [ 
    {nombre: 'Maquina Pro B-Way', stock: true, cantidadstock: 45,precio: 4500,},                    
    {nombre: 'Maquina Afeitadora Profesional Wahl',stock: true,cantidadstock: 30,precio: 3000,}, 
    {nombre: 'Patillera Kemei 1971 ',stock: true,cantidadstock: 15,precio: 5000,}, 
    {nombre: 'Kit Tijeras',stock: true,cantidadstock: 50,precio: 2500,},
]

function cambiarproducto(narray) {
    let opcion_cambiarproducto = Number(prompt(`Que atributo desea modificar? Elija un numero
    1- Nombre 
    2- Cantidadstock
    3- precio`))
    switch (opcion_cambiarproducto) {
        case 1:
            ListaProducto[narray].nombre = prompt('Ingrese el nuevo nombre')
            return ListaProducto[narray].nombre

        case 2:
            ListaProducto[narray].cantidadstock = prompt('Ingrese la nueva cantidad destock')
            return ListaProducto[narray].cantidadstock 

        case 3:
            ListaProducto[narray].precio = prompt('Ingrese el precio')
            return ListaProducto[narray].precio 
 
        default:

    }
}
alert('Bienvenido al sistema de actualizacion de productos de nuestra empresa')
let opcion = Number(prompt(`Desea agregar un producto o cambiar un producto? Elija el numero de opcion 
1- Agregar un producto
2- Cambiar un producto`))
if (opcion === 1) {
    let _nombre = prompt('Ingrese el nombre del producto')
    let _stock = true
    let _cantidadstock = Number(prompt('Ingrese la cantidad stock'))
    let _precio = Number(prompt('Ingrese el precio'))
    let producto = {nombre: _nombre, _stock: _stock, cantidadstock: _cantidadstock, precio: _precio,}
    ListaProducto.push(producto)
    alert(`Nuevo producto creado
    Nombre: ${ListaProducto[4].nombre}
    Cantidad de stock: ${ListaProducto[4].cantidadstock}
    Precio: ${ListaProducto[4].precio}`)
} else {
    let opcion_producto = Number(prompt(`Que producto desea modificar? 
    1- ${ListaProducto[0].nombre}
    2- ${ListaProducto[1].nombre}
    3- ${ListaProducto[2].nombre}
    4- ${ListaProducto[3].nombre} `))
    let producto_x
    let cambio
    let narray
    switch (opcion_producto) {
        case 1:
            narray = 0
            cambio = cambiarproducto(narray)
            alert( ` Su nuevo valor es ${cambio}`)
            break;
        case 2:
            narray = 1
            cambio = cambiarproducto(narray)
            alert( ` Su nuevo valor es ${cambio}`)
            break;
        case 3:
            narray = 2
            cambio = cambiarproducto(narray)
            alert( ` Su nuevo valor es ${cambio}`)
            break;
        case 4:
            narray = 3
            cambio = cambiarproducto(narray)
            alert(` Su nuevo valor es ${cambio}`)
            break;
    }
}

