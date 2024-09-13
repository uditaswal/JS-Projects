
let duration = 0;
let timerInterval;
function timer() {
    // Calculate hours, minutes, and seconds
    const hours = Math.floor(duration / 3600000);
    const minutes = Math.floor((duration % 3600000) / 60000);
    const seconds = Math.floor((duration % 60000)/1000);
    const millisecs = (duration % 1000);

    document.getElementById("timer").innerText = `${hours < 10 ? "0" : ""}${hours}  : ${minutes < 10 ? "0" : ""}${minutes}  : ${seconds < 10 ? "0" : ""}${seconds} : ${millisecs}`;
        duration++;
}

function start() {
     timerInterval = setInterval(timer, 1);

}

function stop() {

    clearInterval(timerInterval);
}


function reset() {
    duration = 0;
    document.getElementById("timer").innerText = `00 : 00 : 00 : 00`

}