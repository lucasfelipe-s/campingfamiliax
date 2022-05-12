// SEASONS DATE

import Countdown from "./countdown.js";

const timeToWinter = new Countdown("21 June 2022 00:00:01 GMT-0300");
const timesWinter = document.querySelectorAll("[data-time-winter]");

function showTimeToWinter() {
  timesWinter.forEach((time, index) => {
    time.innerHTML = timeToWinter.total[index];
  });
}
showTimeToWinter();
setInterval(showTimeToWinter, 1000);

const timeToAutumn = new Countdown("20 June 2022 23:59:59 GMT-0300");
const timesAutumn = document.querySelectorAll("[data-time-autumn]");

function showTimeToAutumn() {
  timesAutumn.forEach((time, index) => {
    time.innerHTML = timeToAutumn.total[index];
  });
}
showTimeToAutumn();
setInterval(showTimeToAutumn, 1000);

const timeToSummer = new Countdown("21 December 2022 00:00:01 GMT-0300");
const timesSummer = document.querySelectorAll("[data-time-summer]");

function showTimeToSummer() {
  timesSummer.forEach((time, index) => {
    time.innerHTML = timeToSummer.total[index];
  });
}
showTimeToSummer();
setInterval(showTimeToSummer, 1000);

const timeToSpring = new Countdown("23 September 2022 00:00:01 GMT-0300");
const timesSpring = document.querySelectorAll("[data-time-spring]");

function showTimeToSpring() {
  timesSpring.forEach((time, index) => {
    time.innerHTML = timeToSpring.total[index];
  });
}
showTimeToSpring();
setInterval(showTimeToSpring, 1000);

