const producto1 = {
    nombre: 'Maquina Pro B-Way',
    stock: true,
    cantidadstock: 45,
    precio: 4500,
}
const producto2 = {
    nombre: 'Maquina Afeitadora Profesional Wahl',
    stock: true,
    cantidadstock: 30,
    precio: 3000,
}
const producto3 = {
    nombre: 'Patillera Kemei 1971 ',
    stock: true,
    cantidadstock: 15,
    precio: 5000,
}
const producto4 = {
    nombre: 'Kit Tijeras',
    stock: true,
    cantidadstock: 50,
    precio: 2500,
}
const producto_modif = {

}
class producto {
    constructor(_nombre, _stock, _cantidadstock, _precio) {
        this.nombre = _nombre;
        this.stock = _stock;
        this.cantidadstock = _cantidadstock;
        this.precio = _precio;
    }
}
function cambiarproducto(producto_x) {
    let opcion_cambiarproducto = Number(prompt(`Que atributo desea modificar? Elija el numero de opcion 
    1- Nombre 
    2- Cantidad de stock
    3- precio`))
    switch (opcion_cambiarproducto) {
        case 1:
            producto_x.nombre = prompt('Ingrese el nuevo nombre del producto')
            producto_modif = producto_x
            return producto_modif
        case 2:
            producto1.cantidadstock = prompt('Ingrese la nueva cantidad de stock')
            producto_modif = producto_x
            return producto_modif
        case 3:
            producto1.precio = prompt('Ingrese el nuevo precio')
            producto_modif = producto_x
            return producto_modif
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
    const producto5 = new producto(_nombre, _stock, _cantidadstock, _precio)
    console.log(_nombre)
    console.log(_cantidadstock)
    console.log(_precio)
    console.log(producto5)
} else {
    let opcion_producto = prompt(`Que producto desea modificar? 
    1- ${producto1.nombre}
    2- ${producto2.nombre}
    3- ${producto3.nombre}
    4- ${producto4.nombre} `)
    switch (opcion_producto) {
        case 1:
            let producto_x = producto1
            let cambio = cambiarproducto()
            console.log(cambio)
            break;
        case 2:
            let producto_x = producto2
            let cambio = cambiarproducto()
            console.log(cambio)
            break;
        case 3:
            let producto_x = producto3
            let cambio = cambiarproducto()
            console.log(cambio)
        case 4:
            let producto_x = producto4
            let cambio = cambiarproducto()
            console.log(cambio)
    }
}

