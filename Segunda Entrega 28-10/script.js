let user = prompt("Bienvenido, vamos a proceder con el registro, ¿Ingrese su nombre de Usuario?")
let pass = prompt("A continuacion ingrese su contraseña")
let age = Number(prompt("Como ultimo requisito para el registro, ingrese su edad"))

if ( (user) && (pass) && (age) ) {
    if (age >= 18) {
        alert("Registro completado, a continuacion haga login")   
        let user_register = prompt("Ingrese su Usuario")
        let pass_register = prompt("Ingrese su contraseña")
        if ( (user_register == user) && (pass_register == pass) ) {
            console.log("Acceso permitido");
        } else {
            alert("Datos Incorrectos" )
        } 
    } else {
        alert("Debes ser mayor de edad para registrarte en este sitio")
    }
} else {
    alert("Es obligatorio completar todos los campos.")
}

