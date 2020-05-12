
function initialize() {
    var mapProp = {
        center: new google.maps.LatLng(32.77767, -96.797),
        zoom: 10,
        mapTypeId: 'hybrid'
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function () {
    $('.modal-trigger').leanModal({
        ready: function () {
            var map2 = document.getElementById("googleMap");
            google.maps.event.trigger(map2, 'resize');
        }
    });
});

// var api_url: https://maps.googleapis.com/maps/api/place/nearbysearch/json?
// var api_key

