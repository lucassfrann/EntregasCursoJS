let ListaProducto = [ 
    {nombre: 'Maquina Pro B-Way', stock: true, cantidadstock: 45,precio: 4500},                    
    {nombre: 'Maquina Afeitadora Profesional Wahl',stock: true,cantidadstock: 30,precio: 10000}, 
    {nombre: 'Patillera Kemei 1971 ',stock: true,cantidadstock: 15,precio: 2000}, 
    {nombre: 'Kit Tijeras',stock: true,cantidadstock: 50,precio: 2500},
    {nombre: 'Desamarillador',stock: true,cantidadstock: 200,precio: 4000},
    {nombre: 'Cera',stock: true,cantidadstock: 100,precio: 300},
]
console.log(ListaProducto)

let opcion = Number(prompt(`Bajo que propiedad quiere ordenar su array? Ingrese el numero opcion
1-Precio 
2-Stock
3-Nombre`))

switch (opcion) {
    case 1:
        ListaProducto.sort((a, b) => {
            return a.precio - b.precio;
        })
        console.log(ListaProducto)
        break;
    
    case 2:
        ListaProducto.sort((a, b) => {
            return a.cantidadstock - b.cantidadstock;
        })
        console.log(ListaProducto)
        break;
    
    case 3:
        ListaProducto.sort((a, b) => {
            const nombreA = a.nombre.toLowerCase();
            const nombreB = b.nombre.toLowerCase();
            if (nombreA < nombreB) {
                return -1;  
            } if (nombreA > nombreB) {
                return 1; 
            } return 0;
        })
        console.log(ListaProducto)
        break;
}