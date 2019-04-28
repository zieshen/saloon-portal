/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function selectSlot(id, slot) {
    document.getElementById("slot").value = slot;
    $(".btn-danger").removeClass("btn-danger");
    $("#" + id).addClass("btn-danger");
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
        //navigator.geolocation.watchPosition(showPosition, showError);
    } else {
        //var x = document.getElementById("loc");
        console.log("Geolocation is not supported by this browser.");
    }
}

// Callbacks
function showPosition(position) {
    //var x = document.getElementById("loc");
    var x = "lat:" + position.coords.latitude + ", lon:" + position.coords.longitude;
    console.log('current location: ' + x);
    // Sending tracking info to server...
    document.getElementById("lat").value = position.coords.latitude;
    document.getElementById("lon").value = position.coords.longitude;
    //document.getElementById("tracker:accuracy").value = position.coords.accuracy;
    //document.getElementById("tracker:speed").value = position.coords.speed;
    //document.getElementById("tracker:timestamp").value = position.timestamp;
    //document.getElementById("locdisp").innerText = x;

/*
    var latlng = {lat: parseFloat(position.coords.latitude), lng: parseFloat(position.coords.longitude)};
    var geocoder = new google.maps.Geocoder;
    geocoder.geocode({'location': latlng}, function (results, status) {
        if (status === 'OK') {
            if (results[0]) {
                document.getElementById('inputAddress').value = results[0].formatted_address;
                document.getElementById('inputAddress2').value = results[0].address_components[results[0].address_components.length - 1].short_name;
            } else {
                window.alert('No results found');
            }
        } else {
            window.alert('Geocoder failed due to: ' + status);
        }
    });
     * */
}

function showError(error) {
    var x = "";
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            x = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            x = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            x = "An unknown error occurred.";
            break;
            document.getElementById("locdisp").innerText = x;
    }
}
