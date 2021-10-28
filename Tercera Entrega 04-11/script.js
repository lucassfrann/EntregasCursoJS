alert('Bienvenido al programa de promedios automaticos')
let opcion = prompt("¿Conoce la cantidad de notas que va a promediar?");
if (opcion == 'si') {
    let cantidad = Number(prompt('¿Cuantas notas va a ingresar?'));
    let acumulado = 0;
    for (let i = 0; i < cantidad; i++) {
        let nota = Number(prompt('Ingrese cada nota una por una'));
        acumulado += nota;
    }  
    alert('El promedio es ' + acumulado / cantidad);
} else {
    let cantidad = 0;
    let acumulado = 0;
    let nota; 
    do {
        nota = prompt('Ingrese una por una cada nota, si ya ingreso el total de las notas escriba "stop"');
        if (nota == "stop") {
            break;
        } else {
            nota = Number(nota);
            acumulado += nota;
            cantidad++;  
        }
    } while (nota !== "stop") 
    alert('El promedio es ' + acumulado / cantidad );
}