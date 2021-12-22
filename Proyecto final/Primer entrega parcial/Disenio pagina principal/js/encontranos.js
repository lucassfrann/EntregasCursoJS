$("#title").click(function () {
    $.ajax({
        url: 'https://image.maps.ls.hereapi.com/mia/1.6/mapview',
        type: 'GET',
        data: {
            c: '-34.6187014,-58.5165792',
            z: '14',
            apiKey: 'V8DoaXj-WLqZdEgO8UIOVacPFJElmAQ8D4vuS2S_gGY'
        },
        success: function (data) {
            alert(JSON.stringify(data));
        }
    });
})