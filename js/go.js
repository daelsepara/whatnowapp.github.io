$(document).ready(function() {
    onUpdateTransportType();
});

function onUpdateTransportType() {
    var transportType = null;
    var storedTransportType = sessionStorage.getItem('transportType');
    
    if (storedTransportType) {
        transportType = storedTransportType;
    }

    $('.transportType').hide();
    $('#transportType-' + transportType).show();

    if (transportType) {
        $('#transportTypeInput').html($('#transportTypeInput-' + transportType).html());
    }
}

function setTransportType(transportType) {
    sessionStorage.setItem('transportType', transportType);
    onUpdateTransportType();
}

function moveForward() {
    var storedTransportType = sessionStorage.getItem('transportType');
    if (!storedTransportType) {
        alert('The transport type was not set.');
        return;
    }

    document.location = 'done.html';
}

