function ipais(preciofinal) {
    return preciofinal + preciofinal * 0.08
}

function iganancias(preciofinal) {
    return preciofinal + preciofinal * 0.30
}
function ipercepcion(preciofinal) {
    return preciofinal + preciofinal * 0.36
}

let precio = Number(prompt('Ingrese el precio del producto en el cual desea aplicar el IVA'))

const calcularprecioiva = (precio) => precio + precio * 0.21;
let preciofinal = calcularprecioiva(precio)
alert(`Su precio final con el IVA incluido es de ${preciofinal}`)

let opcion = Number(prompt(`Desea agregar alguno de estos otros impuestos que podria llegar a aplicarse en Argentina. Elija el numero de la opcion
1- Impuesto PAIS 
2- Impuesto a las ganancias 
3- Percepcion Impuesto RG AFIP
4- No ` ))

switch (opcion) {
    case 1:
        let precioipais = ipais(preciofinal)
        alert(`El precio final con el Impuesto pais + IVA es de ${precioipais} `)
        break;

    case 2:
        let precioiganancias = iganancias(preciofinal)
        alert(`El precio final con el Impuesto a las ganancias + IVA es de ${precioiganancias} `)
        break;

    case 3:
        let precioipercepcion = ipercepcion(preciofinal)
        alert(`El precio final con la Percepcion RG de AFIP + IVA es de ${precioipercepcion} `)
        break;

    case 4:
        break;
}
alert('Gracias por utilizar nuestra calculadora de precios con impuestos, nos vemos la proxima! .')
