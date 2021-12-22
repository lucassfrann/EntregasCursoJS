const urljson2 = "data/datos.json";

$("#button").click(function () {

    let inputnombre = document.getElementById('name-input').value;
    let inputapellido = document.getElementById('secondname-input').value;
    let inputemail = document.getElementById('email-input').value;
    let inputpassword = document.getElementById('password-input').value;

    let info = {
        nombre: inputnombre,
        apellido: inputapellido,
        email: inputemail,
        password: inputpassword
    }

    console.log(info);

    $.ajax({
        method: 'POST',
        url: urljson2,
        dataType: 'json',
        data: info,
        success: function (response) {
            alert('datos enviados correctamente');
        }
    })
})