const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const playBtn = document.querySelector('.circle__btn');
const wave1 = document.querySelector('.circle__back-1');
const wave2 = document.querySelector('.circle__back-2');

var start = Date.now();
var timer = 120;// in seconds
var minutes = (timer / 60) - 1;
var seconds = 0;
if(timer > 60)  seconds = 60;
else seconds = timer;

playBtn.addEventListener('click', function(e) {
  e.preventDefault();
  pause.classList.toggle('visibility');
  play.classList.toggle('visibility');
  playBtn.classList.toggle('shadow');
  wave1.classList.toggle('paused');
  wave2.classList.toggle('paused');
});

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