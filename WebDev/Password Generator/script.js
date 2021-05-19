const ham = document.querySelector(".hambur");
const nav = document.querySelector(".nav-items");
const body = document.getElementsByTagName('body')[0];
const nav_item = document.querySelectorAll("li a");
const butt = document.getElementById('submit');
const clear = document.getElementById('clear');
const copy_span = document.querySelector('.copyspan');
ham.addEventListener('click',()=>{
    nav.classList.toggle('active');
    body.classList.toggle('hide');
    console.log("ok");
    // console.log(body);
});

for(const ele of nav_item){
    ele.addEventListener('click',()=>{
        nav.classList.toggle('active');
        body.classList.toggle('hide');
    })
}
const specials = '!@#$%^&*()_+{}:<>?\|[];\,./`~';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';

const all = specials + lowercase + uppercase + numbers;

function generate(){
    var passBox = document.querySelector("#password");
    let password="";
    let len = document.getElementById("length").value;
    let caps = document.getElementById("cap").value;
    let digi = document.getElementById("digit").value;
    let spcl = document.getElementById("special").value;
    if(!len) len=10;
    if(!digi) digi=0;
    if(!caps) caps=0;
    if(!spcl) spcl=0;
    if(len<8)len=8;
    password += pick(password, specials, spcl);
    password += pick(password, uppercase, caps);
    password += pick(password, numbers, digi);
    password += pick(password, all, len - password.length);
    console.log(len+" "+digi+" "+caps+" "+spcl);
    passBox.value = shuffle(password);
}

function pick(exclusions, string, n) {
    var chars = '';
    var i = 0;
    while (i < n) {
        const character = string.charAt(Math.floor(Math.random() * string.length));
        if (exclusions.indexOf(character) < 0 && chars.indexOf(character) < 0) {
            chars += character;
            i++;
        }
    }
    return chars;
}


function shuffle(string) {
    var array = string.split('');
    var tmp, current, top = array.length;

    if (top) while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }
    return array.join('');
}

butt.addEventListener('click',generate);
clear.addEventListener('click',()=>{
    document.querySelector("#password").value='';
    document.getElementById("length").value='';
    document.getElementById("cap").value='';
    document.getElementById("digit").value='';
    document.getElementById("special").value='';
})

copy_span.addEventListener('click',()=>{
    var passBox = document.querySelector("#password");
    passBox.select();
    passBox.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
    alert("Secure password copied to clipboard");
})

generate(); 
// on start