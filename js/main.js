const hours = document.getElementById("Ore");
const minutes = document.getElementById("Minuti");
const seconds = document.getElementById("Secondi");
const days = document.getElementById("Giorni");

const now = new Date();
const end = new Date("2023-12-15 13:30");

let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;
let timer;

function showRemaining() {
  let now = new Date();
  let distance = end - now;
  if (distance <= 0) {
    clearInterval(timer);
    return;
  }
  let days = Math.floor(distance / day);
  let hours = Math.floor((distance % day) / hour);
  let minutes = Math.floor((distance % hour) / minute);
  let seconds = Math.floor((distance % minute) / second);

  days = document.getElementById("Giorni").innerHTML = days + " Giorni ";
  hours = document.getElementById("Ore").innerHTML = hours + " Ore";
  minutes = document.getElementById("Minuti").innerHTML = minutes + " Minuti";
  seconds = document.getElementById("Secondi").innerHTML = seconds + " Secondi";
}

timer = setInterval(showRemaining, 1000);
