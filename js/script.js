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
    
    if (h > 12) {
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
        alert("Bon allez... T'as de la chance, j'ai rechargé ton mac ! Par contre, désolé mais je n'ai pas pu remonter le temps...");
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


$(document).ready(function() {
/* -------------------------- CLOSE WINDOWS -------------------------- */
    $( '.close' ).click(function() {
        $( this ).parents().eq(2).hide();
        var appName = $( this ).parents().eq(2).attr('id');
        $( '#' + appName + '-app' ).children( '.app-on' ).addClass( 'app-on-hidden' );
    });    

/* -------------------------- OPEN WINDOWS -------------------------- */    
    $( '.app' ).click(function() {
	   var app = $(this).attr('id').slice(0, -4);
	   $( '#' + app ).show();
    }); 
    
/* ---------------------- HOVER BUTTONS WINDOWS ----------------------- */
	$( '.window-button' ).mouseover(function() {
		var name = $( this ).attr('id').slice(0, -2);
		$( this ).attr('src', 'img/window-buttons/' + name + '-hover.png');
	});
	
	$( '.window-button' ).mouseout(function() {
		var name = $( this ).attr('id').slice(0, -2);
		$( this ).attr('src', 'img/window-buttons/' + name + '.png');
	});		
	     
});

