const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const birthday = new Date("December 10 2024 11:25:00");

function updateCountdown() {
    const currentTime = new Date();
    const diff = birthday - currentTime;
    const d = Math.floor(diff/1000 / 60 / 60 / 24);
    const h = Math.floor(diff/1000 / 60 / 60) % 24;
    const m = Math.floor(diff/1000 / 60 ) % 60 ;
    const s = Math.floor(diff/1000 ) % 60 ;

    days.innerHTML = d;
    hours.innerHTML = h < 10? '0' +h:h;
    minutes.innerHTML = m < 10? '0' +m:m;
    seconds.innerHTML = s < 10? '0' +s:s;


    if (h<=0 && m<=0 && s<=0){
        window.location.replace("https://subahsbday.vercel.app/");
    }
}

setInterval(updateCountdown, 1000);