let producto_modif = {

}

const ListaProducto = [ 
    {nombre: 'Maquina Pro B-Way', stock: true, cantidadstock: 45,precio: 4500,},                    
    {nombre: 'Maquina Afeitadora Profesional Wahl',stock: true,cantidadstock: 30,precio: 3000,}, 
    {nombre: 'Patillera Kemei 1971 ',stock: true,cantidadstock: 15,precio: 5000,}, 
    {nombre: 'Kit Tijeras',stock: true,cantidadstock: 50,precio: 2500,},
]

class producto {
    constructor(_nombre, _stock, _cantidadstock, _precio) {
        this.nombre = _nombre;
        this.stock = _stock;
        this.cantidadstock = _cantidadstock;
        this.precio = _precio;
    }
}
function cambiarproducto(producto_x) {
    let opcion_cambiarproducto = (prompt(`Que atributo desea modificar?  
    - Nombre 
    - Cantidad de stock
    - precio`)).toLowerCase
    if (producto_x[opcion_cambiarproducto] !== null) {
        producto_modif = producto_x
        producto_modif[opcion_cambiarproducto] = prompt(`Ingrese el nuevo valor`)
        return producto_modif
    } else {
        alert("No existe ese atributo")
        return producto_x
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
    let producto = {nombre: _nombre, _stock: _stock, _cantidadstock: _cantidadstock, precio: _precio,}
    ListaProducto.push(producto)
} else {
    let opcion_producto = Number(prompt(`Que producto desea modificar? 
    ${ListaProducto} `))
    let producto_x
    let cambio
    switch (opcion_producto) {
        case 1:
            producto_x = producto1
            cambio = cambiarproducto(producto_x)
            console.log(cambio)
            break;
        case 2:
            producto_x = producto2
            cambio = cambiarproducto(producto_x)
            console.log(cambio)
            break;
        case 3:
            producto_x = producto3
            cambio = cambiarproducto(producto_x)
            console.log(cambio)
            break;
        case 4:
            producto_x = producto4
            cambio = cambiarproducto(producto_x)
            console.log(cambio)
            break;
    }
}

