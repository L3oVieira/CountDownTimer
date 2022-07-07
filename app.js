const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 1 ${currentYear + 1} 00:00:00`);


// Função seta a data final (NewYearTime) e subtrai (currentTime) desse valor
function updateCountdown(){
    const currentTime = new Date();
    const diff = newYearTime - currentTime
    
    // Matemática para alcançar os valores de tempo
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60 ) % 24; 
    const minutesLeft = Math.floor(diff / 1000 / 60 ) % 60 ; 
    const secondsLeft = Math.floor(diff / 1000 ) % 60;
    
    // Se menor que 10 acrecenta 0 ao começo dos números
    days.innerHTML = daysLeft;
    hours.innerHTML = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
    minutes.innerHTML = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
    seconds.innerHTML = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;

   
    // Muda a legenda entre plural e singular quando o valor é menor que 2 (ex: Segundo / Segundos)
    // Segundos
    if (secondsLeft < 2) {
        const minute = document.querySelector(".second");
        minute.innerHTML = "segundo"
    }
    if (secondsLeft > 1) {
        const minute = document.querySelector(".second");
        minute.innerHTML = "segundos"
    }
    
    // Minutos
    if (minutesLeft < 2) {
        const minute = document.querySelector(".minute");
        minute.innerHTML = "minuto"
    }
    if (minutesLeft > 1){
        const minute = document.querySelector(".minute");
        minute.innerHTML = "minutos"
    }
    
    // Horas
    if (hoursLeft < 2) {
        const minute = document.querySelector(".hour");
        minute.innerHTML = "hora"
    }
    if (hoursLeft > 1) {
        const minute = document.querySelector(".hour");
        minute.innerHTML = "horas"
    }
    
    // Dias
    if (daysLeft < 2) {
        const minute = document.querySelector(".day");
        minute.innerHTML = "dia"
    }
    if (daysLeft > 1) {
        const minute = document.querySelector(".day");
        minute.innerHTML = "dias"
    }
    
    
    
}setInterval(updateCountdown, 1000)
