console.log("Welcome to the Ajax Server programming") 

function showTime(){
    const date = new Date();
    return date.getHours() + "Hrs:" + date.getMinutes() + "Mins:" + date.getSeconds() + "secs:";
}

function showSessionExpire(){
    console.log("Activity-B: Your session expired at " + showTime());
}

console.log("Activity-A: Trigerring Activity-B at " + showTime());
setTimeout(showSessionExpire, 5000);
console.log("Activity-A Triggered Activity-B at " + showTime()); 