let api = "http://hp-api.herokuapp.com/api/characters"

$("#btn").click(function () {
    $("#btn").fadeOut()
    $("#btn2").show()
});

let index = 0

let x = 0

let respuesta

$("#btn2").click(function () {
    $(".p").hide()
    $(".p2").hide()
    $.get(api, (response) => {
        $("body").append(
            `   <p class="p" style="display: none;">Correcto!</p>
                <p class="p2" style="display: none;">Error!</p>
                <div class="padre">
                <div id="contenedor">
                <img src="${response[index].image}"></img>
                </div>
                <form>
                <input type="" placeholder="Quien es?" required="" id="name-input">
                <button type="button" class="btn3">Enviar respuesta</button>
                </form>
                </div>`)
        $(".btn3").click(function () {
            respuesta = document.getElementById('name-input').value.toLowerCase();
            console.log(respuesta)
            if (respuesta == response[index].name.toLowerCase()) {
                $('.p').show()
                $('.padre').remove()
                index++
            } else {
                $('.p2').show()
                $('#contenedor').fadeOut('slow')
                $('form').fadeOut('slow')
            }
        })
    })
})