var start = Date.now();

var si = setInterval(function() {
    var delta = Date.now() - start; // milliseconds elapsed since start

    output(Math.floor(delta / 1000)); // in seconds
}, 1000); // update about every second

timer = 20;
function output(time){
    document.getElementById("timer").innerHTML = timer;
    if(timer < 0){
        clearInterval(si);
    }
    timer--;
    console.log(time);
}