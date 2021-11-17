const ListaProducto = [ 
    {nombre: 'Polvo Matizador', stock: true, cantidadstock: 50,precio: 950},                    
    {nombre: 'Desamarillador',stock: true,cantidadstock: 50,precio: 500}, 
    {nombre: 'Cera Hairstyle',stock: true,cantidadstock: 50,precio: 930}, 
]

let Carrito = []

function actualizarcarrito(i) {
    Carrito.push(ListaProducto[i])
    let obJSON = JSON.stringify(Carrito)
    localStorage.setItem(`Productos`, obJSON)
    
}

function Sumaprecios(opcionwhile) {
    if (opcionwhile == 1) {
        let precioparcial = Carrito.map(ListaProducto => ListaProducto.precio).reduce((a,b) => a+b, 0) 
        const ul = document.querySelector(".carrito-productos")
        ul.innerHTML = ""
        let carrito = document.createElement("li")
        li.textcontent = `Producto: ${ListaProducto[i].nombre} $ ${ListaProducto[i].precio}`
        ul.appendChild(li)
        p.innerHTML = ""
        const p = document.querySelector(".carrito-preciofinal")
        p.textcontent = (`${precioparcial}`)

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
let k = 0
do {
    opcionwhile = 1
    k++
    switch (opcionproducto) {
        case 1:         
           i = 0
           alert(`Excelente decision!, El precio del producto es de ${ListaProducto[0].precio}`)
           Sumaprecios(opcionwhile);
           actualizarcarrito(i);
           break;
           
        case 2:
            i = 1
            alert(`Excelente decision!, El precio del producto es de ${ListaProducto[1].precio}`)
            Sumaprecios(opcionwhile);
            actualizarcarrito(i);
            break;


        case 3:
            i = 2
            alert(`Excelente decision!, El precio del producto es de ${ListaProducto[2].precio}`)
            Sumaprecios(opcionwhile);
            actualizarcarrito(i);
            break;
  
        case 4:
            opcionwhile = 0
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
