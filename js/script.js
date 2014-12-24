/* ----------------------- AUTOMATIC TIME --------------------------- */

var serverTime = new Date();
var h = serverTime.getHours();
var m = serverTime.getMinutes();
var weekday = new Array(7);
weekday[0]=  "Dim.";
weekday[1] = "Lun.";
weekday[2] = "Mar.";
weekday[3] = "Mer.";
weekday[4] = "Jeu.";
weekday[5] = "Ven.";
weekday[6] = "Sam.";

function updateTime() {
    serverTime = new Date(serverTime.getTime() + 10000);
    h = serverTime.getHours();
    m = serverTime.getMinutes();
    var n = weekday[serverTime.getDay()];
    
    if (h >= 12) {
        h = h -12;
        if (m < 10) {
            $('#time').html(n + " " + h + ":0" + m + " PM");
        }
        else {
            $('#time').html(n + " " + h + ":" + m + " PM");
        }
    }
    else {
        if (m < 10) {
            $('#time').html(n + " " + h + ":0" + m + " AM");
        }
        else {
            $('#time').html(n + " " + h + ":" + m + " AM");
        }
    }
}

$(function() {
    updateTime();
    setInterval(updateTime, 10000);
});

/* ----------------------- BATTERY PERCENTAGE ----------------------- */

var batteryPercentage = 101;

function updateBattery() {
    batteryPercentage = batteryPercentage - 1;
    if (batteryPercentage == 0) {
        batteryPercentage = 100;
        alert("Bon allez, t'as de la chance, j'ai rechargé ton mac !");
        $('.battery-percentage').html("100%");
    }
    else {
        $('.battery-percentage').html(batteryPercentage + "%");
    }
}

$(function() {
    updateBattery();
    setInterval(updateBattery, 30000);
});


/* ----------------------- WINDOW README ----------------------- */
$(document).ready(function() {
    $('.first').click(function() {
        $('.first').parents().eq(2).hide();
    });
});

$(document).ready(function() {
    $('#textedit').click(function() {
        $('#readme-window').show();
    });
});

