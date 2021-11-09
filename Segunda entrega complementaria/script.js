let ListaProducto = [ 
    {nombre: 'Maquina Pro B-Way', stock: true, cantidadstock: 45,precio: 4500},                    
    {nombre: 'Maquina Afeitadora Profesional Wahl',stock: true,cantidadstock: 30,precio: 3000}, 
    {nombre: 'Patillera Kemei 1971 ',stock: true,cantidadstock: 15,precio: 5000}, 
    {nombre: 'Kit Tijeras',stock: true,cantidadstock: 50,precio: 2500},
    {nombre: 'Desamarillador',stock: true,cantidadstock: 200,precio: 1500},
    {nombre: 'Cera',stock: true,cantidadstock: 100,precio: 1200},
]

ListaProducto.sort( (a,b) )
if (a.precio > b.precio) {
    return 1;
  } else {
      return -1;
}
