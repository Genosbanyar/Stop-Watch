const stopWatch = document.getElementsByClassName("stop-watch")[0];
const startButton = document.getElementsByClassName("start")[0];
const pauseButton = document.getElementsByClassName("pause")[0];
const continueButton = document.getElementsByClassName("continue")[0];
const restartButton = document.getElementsByClassName("restart")[0];
const miliSec = document.getElementsByClassName("milisec")[0];
const bodyTag = document.getElementsByTagName("body")[0];

let miliSecond = 0,
  seconds = 0,
  minutes = 0,
  hours = 0;
const start = () => {
  miliSecond += 1;
  if (miliSecond === 60) {
    seconds += 1;
    miliSecond = 0;
  }
  if (seconds === 60) {
    minutes += 1;
    seconds = 0;
  }
  if (minutes === 60) {
    hours += 1;
    minutes = 0;
  }
  let miliText = miliSecond < 10 ? "0" + miliSecond : miliSecond;
  let secondText = seconds < 10 ? "0" + seconds : seconds;
  let minuteText = minutes < 10 ? "0" + minutes : minutes;
  let hourText = hours < 10 ? "0" + hours : hours;
  miliSec.textContent = miliText;
  stopWatch.textContent = hourText + " : " + minuteText + " : " + secondText;
};

let intervalTime;
startButton.addEventListener("click", () => {
  intervalTime = setInterval(start, 10);
});

pauseButton.addEventListener("click", () => {
  clearInterval(intervalTime);
});

continueButton.addEventListener("click", () => {
  clearInterval(intervalTime);
  intervalTime = setInterval(start, 10);
});

restartButton.addEventListener("click", () => {
  clearInterval(intervalTime);
  miliSecond = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  intervalTime = setInterval(start, 10);
});
