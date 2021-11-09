let userName = prompt("Lütfen adınızı giriniz:");

let hello = document.querySelector("#hello");
hello.innerHTML = `Merhaba, ${userName}. Hoşgeldin!`;


function startTime() {
    const present = new Date();
    let h = present.getHours();
    let m = present.getMinutes();
    let s = present.getSeconds();
    let y = present.getFullYear();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s + " " + y;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
  } 

let present = new Date();
let day = present.getUTCDay();

if(day == 1){
    day = "Pazartesi";
} else if(day == 2){
    day = "Salı";
} else if(day == 3){
    day = "Çarşamba";
} else if(day == 4){
    day = "Perşembe";
} else if(day == 5){
    day = "Cuma";
} else if(day == 6){
    day = "Cumartesi";
} else if(day == 7){
    day = "Pazar";
}

let date = document.querySelector("#date");
date.innerHTML = ` ${day} Günü <strong>Kodluyoruz Frontend Web Development Patikası</strong>'nın JavaScript bölümü 1. Ödevindesiniz.`;


