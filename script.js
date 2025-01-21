let seconds = 0;
let interval = null;
const time = document.getElementById("Time")

function padStart(value){
    return String(value).padStart(2,"0")
}

function setTime(){
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    time.innerHTML = `${padStart(minutes)}:${padStart(sec)}`;
}

function timer(){
    seconds++
    setTime();
}


document.getElementById("Start").addEventListener("click",()=>{
    if (interval) stopClock()
    interval = setInterval(timer,1000)

})

document.getElementById("Stop").addEventListener("click", stopClock)

function stopClock(){
    clearInterval(interval)
}



document.getElementById("Restart").addEventListener("click", restartClock)

function restartClock(){
    stopClock()
    seconds = 0;
    setTime();
}