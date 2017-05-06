$(document).ready(function() {
    onUpdateTransportType();

    var weatherType = sessionStorage.getItem('weatherType');

    if (weatherType == 'sunny') {
        sessionStorage.setItem('weatherType', 'rainy');
    }

    if (weatherType == 'rainy') {
        sessionStorage.setItem('weatherType', 'sunny');
    }

    sessionStorage.removeItem('moodType');
    sessionStorage.removeItem('transportType');
});

function onUpdateTransportType() {
    var transportType = null;
    var storedTransportType = sessionStorage.getItem('transportType');
    
    if (storedTransportType) {
        transportType = storedTransportType;
    }

    $('.transportType').hide();
    $('#transportType-' + transportType).show();
}

function moveForward() {
    document.location = 'plan.html';
}