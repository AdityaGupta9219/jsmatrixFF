let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayDate(){
    let date = new Date();

    //getting dates and time from functions
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();


    let Hrotation = 30*hh + mm/2;
    let Mrotation = 6*mm;
    let Srotation = 6*ss;

    hr.style.transform = `rotate(${Hrotation}deg)`;
    min.style.transform = `rotate(${Mrotation}deg)`;
    sec.style.transform = `rotate(${Srotation}deg)`;
}
setInterval(displayDate,1000);