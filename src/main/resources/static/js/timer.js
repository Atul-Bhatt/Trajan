const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const playBtn = document.querySelector('.circle__btn');

/* Increment-Decrement timer buttons */
const incrementTimer = document.querySelector('.increment-timer');
const decrementTimer = document.querySelector('.decrement-timer');
const timerLength = document.querySelector('#timer-length');

/* Start Stop timer. */
const timerBox = document.querySelector('.timer');
const timerInputContainer = document.querySelector('.timer-input-container');

var si;

function newTimer() {
    var start = Date.now();
    var timer = parseInt(timerLength.value) * 60;// in seconds
    var minutes = (timer / 60) - 1;
    var seconds = 0;
    if(timer > 60)  seconds = 60;
    else seconds = timer;

    /* Stop previous timer */
    clearInterval(si);

    /* Running the timer */
    si = setInterval(function() {
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
}

/* Play pause button */
playBtn.addEventListener('click', function(e) {
  e.preventDefault();
  newTimer();
  pause.classList.toggle('visibility');
  play.classList.toggle('visibility');
  playBtn.classList.toggle('shadow');
  timerBox.classList.toggle('visibility');
  timerInputContainer.classList.toggle('visibility');
});

/* Create a new task */
const taskInput = document.querySelector('.task-input');
taskInput.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        postTask();
        addTask();
    }
});

const submitTask = document.querySelector(".submit-task");
submitTask.addEventListener('click', function(e) {
    postTask();
    addTask();
});

function addTask() {
    const li = document.createElement("li");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");

    li.classList.add("task-list-item");
    label.classList.add("task-list-item-label");
    input.classList.add("task-input-field");
    input.type = "checkbox";
    span1.innerHTML = taskInput.value;
    span1.classList.add("task-text");
    span2.title = "Delete Task";
    span2.classList.add("delete-btn");
    span2.onclick = deleteTask;

    label.appendChild(input);
    label.appendChild(span1);
    li.appendChild(label);
    li.appendChild(span2);
    document.querySelector(".task-list").appendChild(li);
    taskInput.value = "";
}

/* Delete a task */
function deleteTask() {
    this.parentElement.remove();
}

/* Pass Created Tasks to Controller */
function postTask() {
    fetch("/tasks", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'task': taskInput.value,
                              'hours': 1
        })
        });
}

/* Increment-Decrement timer */
incrementTimer.addEventListener('click', function(e) {
    if(timerLength.value < 180)     timerLength.value = parseInt(timerLength.value) + 15;
});

decrementTimer.addEventListener('click', function(e) {
    if(timerLength.value > 15)    timerLength.value = timerLength.value - 15;
});