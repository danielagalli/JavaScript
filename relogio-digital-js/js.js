const hoursElement = document.getElementById('hours');
const minutesElement =  document.getElementById('minutes');
const secondsElement =  document.getElementById('seconds');


function newTime(){
    const date = new Date();

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds =  date.getSeconds()
    
    hoursElement.textContent = fixTime(hours)
    minutesElement.textContent = fixTime(minutes)
    secondsElement.textContent = fixTime(seconds)
}

function fixTime(newTime){
    return newTime < 10 ? '0' + newTime : newTime
}

newTime()
setInterval(newTime,1000)