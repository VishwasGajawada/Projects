particlesJS.load('analog', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});

const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const dateel = document.getElementById("date");
const needle = document.querySelectorAll(".needle"); //hr,min,sec needles

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function setTime(){
    const time = new Date();
    let h=time.getHours();
    let m=time.getMinutes();
    let s=time.getSeconds();
    let day = time.getDay();
    let month = time.getMonth();
    let date = time.getDate();
    if(h<10)h="0"+h;    
    if(m<10)m="0"+m;
    if(s<10)s="0"+s;
    hr.innerHTML=h;
    min.innerHTML=m;
    sec.innerHTML=s;
    if(date<10)date="0"+date;
    dateel.innerHTML = `${days[day]}, ${months[month]} ${date}`;

    needle[0].style.transform = `translate(-50%, -100%) rotate(${(h%12)*360/12}deg)`
    needle[1].style.transform = `translate(-50%, -100%) rotate(${m*6}deg)`
    needle[2].style.transform = `translate(-50%, -100%) rotate(${s*6}deg)`
}

setTime();
setInterval(setTime,1000);

