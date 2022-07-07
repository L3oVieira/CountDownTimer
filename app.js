const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 1 ${currentYear + 1} 00:00:00`);



function updateCountdown(){
    const currentTime = new Date();
    const diff = newYearTime - currentTime

    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60 ) % 24; 
    const minutesLeft = Math.floor(diff / 1000 / 60 ) % 60 ; 
    const secondsLeft = Math.floor(diff / 1000 ) % 60;

    days.innerHTML = daysLeft;
    hours.innerHTML = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
    minutes.innerHTML = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
    seconds.innerHTML = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
}
setInterval(updateCountdown, 1000)