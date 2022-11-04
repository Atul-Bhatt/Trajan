var start = Date.now();
var timer = 120;// in seconds
var minutes = (timer / 60) - 1;
var seconds = 0;
if(timer > 60)  seconds = 60;
else seconds = timer;

var si = setInterval(function() {
    var delta = Date.now() - start; // milliseconds elapsed since start

    if(timer <= 0){
        clearInterval(si);
    }
    if(minutes < 10)    minuteString = "0" + minutes;
    else minuteString = minutes;
    if(seconds < 10)    secondString = "0" + seconds;
    else secondString = seconds;
    document.getElementById("timer").innerHTML = minuteString + ":" + secondString;
    timer--;
    seconds--;
    if((timer > 59) && (timer % 60) == 0){
        seconds = 60
        minutes--;
    }
}, 1000); // update about every second