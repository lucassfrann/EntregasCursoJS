function descuento( precio ) {
    let preciofinal = precio * 0.7
    alert(`El precio con el descuento incluido de su producto es ${preciofinal}`)
    return preciofinal
}
function cuotas( precio , cantidadcuotas ) {
    let preciofinal = (precio*1.05)/cantidadcuotas
    return alert(`Usted va a abonar ${precio} en ${cantidadcuotas} cuotas de ${preciofinal}`)
}

alert('Bienvenido al sitio web de Five5Barber')
let precio = Number(prompt('Ingrese el monto del producto/s que desea abonar'))
let opcion = Number(prompt(`Es su primera compra en five5barber? Elija el numero de opcion
1-Si
2-No`))

if (opcion == 1) {
    let preciofinal = descuento( precio )
} else {
    let opcioncuotas = Number(prompt(`No dispone de descuento, desea abonar en cuotas con un 5% de interes?
    1- Si
    2- No`))
    if (opcioncuotas == 1) {
       let cantidadcuotas = Number(prompt(`En cuantas cuotas desea abonar? Escriba el numero de cuotas que desa
        3 cuotas
        6 cuotas 
        12 cuotas`))
        cuotas( precio , cantidadcuotas )
    } else {
        alert(`El monto final a abonar en un solo pago es de ${precio}`)
    }




    

}
