var start = Date.now();
timer = 20;

var si = setInterval(function() {
    var delta = Date.now() - start; // milliseconds elapsed since start

    if(timer <= 0){
        clearInterval(si);
    }
    document.getElementById("timer").innerHTML = timer;
    timer--;

}, 1000); // update about every second