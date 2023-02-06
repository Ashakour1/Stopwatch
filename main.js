let [second,minute,hours] =[0,0,0];
let Time = document.getElementById("displaytimer");
let timer = null

function stopwatch(){
    second++;
    if(second == 60){
        second = 0
        minute++;
        if(minute == 60){
            minute =0
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;

    Time.innerHTML = h + ":" + m + ":" + s;
}
function watchstart(){

    if(timer !== null){

        clearInterval(timer);
    }
  timer =  setInterval(stopwatch,1000);
}
function watchstop(){
    clearInterval(timer);
}
function watchreset(){
    clearInterval(timer);
    [second,minute,hours] =[0,0,0];
    Time.innerHTML = "OO:OO:OO"
}