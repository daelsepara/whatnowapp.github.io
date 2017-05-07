$(document).ready(function() {
    onUpdateTravellerType();
    onUpdateMoodType();
    onUpdateTimeType();
    onUpdateWeatherType();
});

function onUpdateTravellerType() {
    var travellerType = null;
    var storedTravellerType = sessionStorage.getItem('travellerType');
    
    if (storedTravellerType) {
        travellerType = storedTravellerType;
    }

    if (travellerType) {
        $('#travellerTypeInput').html($('#travellerType-' + travellerType).html());
    }
}

function onUpdateMoodType() {
    var moodType = null;
    var storedMoodType = sessionStorage.getItem('moodType');
    
    if (storedMoodType) {
        moodType = storedMoodType;
    }
    
    if (moodType) {
        $('#moodTypeInput').html($('#moodType-' + moodType).html());
    }
}

function onUpdateTimeType() {
    var timeType = null;
    var storedTimeType = sessionStorage.getItem('timeType');
    
    if (storedTimeType) {
        timeType = storedTimeType;
    }
    
    if (timeType) {
        $('#timeTypeInput').html($('#timeType-' + timeType).html());
    }
}

function onUpdateWeatherType() {
    var weatherType = 'sunny';
    var storedWeatherType = sessionStorage.getItem('weatherType');
    
    if (storedWeatherType) {
        weatherType = storedWeatherType;
    } else {
        sessionStorage.setItem('weatherType', weatherType);
    }

    $('.weatherType').hide();
    $('#weatherType-' + weatherType).show();
}

function setTravellerType(travellerType) {
    sessionStorage.setItem('travellerType', travellerType);
    onUpdateTravellerType();
}

function setMoodType(moodType) {
    sessionStorage.setItem('moodType', moodType);
    onUpdateMoodType();
}

function setTimeType(timeType) {
    sessionStorage.setItem('timeType', timeType);
    onUpdateTimeType();
}

function moveForward() {
    var storedWeatherType = sessionStorage.getItem('weatherType');
    if (!storedWeatherType) {
        alert('The weather type was not set.');
        return;
    }

    var storedTravellerType = sessionStorage.getItem('travellerType');
    if (!storedTravellerType) {
        alert('The stored traveller type was not set.');
        return;
    }

    var storedMoodType = sessionStorage.getItem('moodType');
    if (!storedMoodType) {
        alert('The stored mood type was not set.');
        return;
    }

    var storedTimeType = sessionStorage.getItem('timeType');
    if (!storedTimeType) {
        alert('The stored time type was not set.');
        return;
    }

    document.location = 'choose.html';
}