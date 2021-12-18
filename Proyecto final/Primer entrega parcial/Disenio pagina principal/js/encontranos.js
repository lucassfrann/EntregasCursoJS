let map

function initMap() {
    var coord = {
        lat: -34.6187014,
        lng: -58.5165792
    };
    var map = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 15,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}