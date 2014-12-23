var serverTime = new Date();
var h = serverTime.getHours();
var m = serverTime.getMinutes();

function updateTime() {
    serverTime = new Date(serverTime.getTime() + 1000);
    h = serverTime.getHours();
    m = serverTime.getMinutes();
    if (h >= 12) {
        h = h -12;
        if (m < 10) {
            $('#time').html(h + ":0" + m + " PM");
        }
        else {
            $('#time').html(h + ":" + m + " PM");
        }
    }
    else {
        if (m < 10) {
            $('#time').html(h + ":0" + m + " AM");
        }
        else {
            $('#time').html(h + ":" + m + " AM");
        }
    }
}

$(function() {
    updateTime();
    setInterval(updateTime, 10000);
});