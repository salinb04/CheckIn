
function initialize() {
    var mapProp = {
        center: new google.maps.LatLng(32.77767, -96.797),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var map2 = new google.maps.Map(document.getElementById("googleMap2"), mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function () {
    //MAKE SURE YOU CALL .leanModal METHOD THIS WAY.
    //ELSE MODAL MAP WILL NOT SHOW PROPERLY.
    $('.modal-trigger').leanModal({
        ready: function () {
            var map2 = document.getElementById("googleMap2");
            google.maps.event.trigger(map2, 'resize');
        }
    });
});

// Try HTML5 geolocation.
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
    }, function () {
        handleLocationError(true, infoWindow, map.getCenter());
    });
} else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}
