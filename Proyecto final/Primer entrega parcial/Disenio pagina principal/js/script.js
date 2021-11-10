const ListaProducto = [ 
    {nombre: 'Polvo Matizador', stock: true, cantidadstock: 50,precio: 950},                    
    {nombre: 'Desamarillador',stock: true,cantidadstock: 50,precio: 500}, 
    {nombre: 'Cera Hairstyle',stock: true,cantidadstock: 50,precio: 930}, 
]

let Carrito = []

function Sumaprecios(opcionwhile)
if (opcionwhile == 1) {
    alert('Hasta el momento el total de su compra es de ')
}


function arrcarrito(precio) {

}

let opcionproducto = Number(prompt(`Bienvenido a Five Barber, que producto desea comprar? Escriba el numero de opcion
1-Polvo matizador
2-Desamarillador
3-Cera Hairstyle
4-Salir`))


do {
    switch (opcionproducto) {
        case 1: 
           let i = 0
           alert(`Excelente decision!, El precio del producto es de ${ListaProducto[0].precio}`)
           Sumaprecios(opcionwhile);
           
        case 2:
            let i = 1
            alert(`Excelente decision!, El precio del producto es de ${ListaProducto[1].precio}`)
            Sumaprecios(opcionwhile);


        case 3:
            let i = 2
            alert(`Excelente decision!, El precio del producto es de ${ListaProducto[2].precio}`)
            Sumaprecios(opcionwhile);
  
        case 4:
            break;
    }

    if (opcionproducto ==! 4) {
        let opcionwhile = Number(prompt(`Desea agregar otro producto al carrito? Elija el numero de opcion
    1-Si
    2-No`))
    }

} while ( opcionwhile == 1);

alert('Gracias por su compra en Five Barber')
