const urljson = "data/datos.json";

$.get(urljson, (data, status) => {

    if (status === "success") {
        $("#button").click(function () {
            let email = $('#email-input').val()
            let password = $('#password-input').val()
            console.log(email, password)
            for (let i = 0; i < data.length; i++) {
                if (email === data[i].email) {
                    if (password === data[i].password) {
                        console.log("Login exitoso")
                    }
                }
            }
        })
    }
})