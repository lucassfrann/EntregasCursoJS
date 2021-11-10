const ListaProducto = [ 
    {nombre: 'Polvo Matizador', stock: true, cantidadstock: 50,precio: 950},                    
    {nombre: 'Desamarillador',stock: true,cantidadstock: 50,precio: 500}, 
    {nombre: 'Cera Hairstyle',stock: true,cantidadstock: 50,precio: 930}, 
]

let Carrito = []

function Sumaprecios(opcionwhile) {
    if (opcionwhile == 1) {
        Carrito.push(ListaProducto[i])
        let precioparcial = Carrito.map(ListaProducto => ListaProducto.precio).reduce((a,b) => a+b, 0) 
        alert(`Hasta el momento el total de su compra es de ${precioparcial} `)   
    }
}


function arrcarrito(precio) {

}

let opcionproducto = Number(prompt(`Bienvenido a Five Barber, que producto desea comprar? Escriba el numero de opcion
1-Polvo matizador
2-Desamarillador
3-Cera Hairstyle
4-Salir`))

let opcionwhile
let i
do {
    opcionwhile = 1

    switch (opcionproducto) {
        case 1:         
           i = 0
           alert(`Excelente decision!, El precio del producto es de ${ListaProducto[0].precio}`)
           Sumaprecios(opcionwhile);
           break;
           
        case 2:
            i = 1
            alert(`Excelente decision!, El precio del producto es de ${ListaProducto[1].precio}`)
            Sumaprecios(opcionwhile);
            break;


        case 3:
            i = 2
            alert(`Excelente decision!, El precio del producto es de ${ListaProducto[2].precio}`)
            Sumaprecios(opcionwhile);
            break;
  
        case 4:
            break;
    }

    if (opcionproducto !== 4) {
        opcionwhile = 0
        opcionwhile = Number(prompt(`Desea agregar otro producto al carrito? Elija el numero de opcion
    1-Si
    2-No`)) 

    if (opcionwhile == 1) {
        opcionproducto = Number(prompt(`Que producto desea agregar al carrito? Escriba el numero de opcion
        1-Polvo matizador
        2-Desamarillador
        3-Cera Hairstyle
        4-Salir`))  
    }
    }


} while ( opcionwhile == 1);

alert('Gracias por su compra en Five Barber')
