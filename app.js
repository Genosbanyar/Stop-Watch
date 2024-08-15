const startButton = document.getElementsByClassName("start")[0];
const stopButton = document.getElementsByClassName("stop")[0];
const continueBtn = document.getElementsByClassName("continue")[0];
const restartBtn = document.getElementsByClassName("restart")[0];
const stopWatch = document.getElementsByClassName("clock")[0];

let minutes = 0,
  seconds = 0,
  hours = 0;
let start = () => {
  seconds += 1;
  if (seconds === 60) {
    minutes += 1;
    seconds = 0;
  }
  if (minutes === 60) {
    hours += 1;
    minutes = 0;
  }
  let secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
  let minutesText = minutes < 10 ? "0" + minutes.toString() : minutes;
  let hoursText = hours < 10 ? "0" + hours.toString() : hours;
  stopWatch.textContent = hoursText + " : " + minutesText + " : " + secondText;
};
let stopInterval;
startButton.addEventListener("click", () => {
  stopInterval = setInterval(start, 1000);
});

stopButton.addEventListener("click", () => {
  clearInterval(stopInterval);
});

continueBtn.addEventListener("click", () => {
  clearInterval(stopInterval);
  stopInterval = setInterval(start, 1000);
});

restartBtn.addEventListener("click", () => {
  clearInterval(stopInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  stopInterval = setInterval(start, 1000);
});
