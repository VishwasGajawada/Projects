const history_div = document.querySelector('#history');
// const history_div = document.getElementById('history');
const current_div = document.querySelector('#current');
const numbers_divs = document.querySelectorAll('.number');
const operators_divs = document.querySelectorAll('.operator')
const other_divs = document.querySelectorAll('.other');
const clear_div = document.querySelector('#clear');
const back_div = document.querySelector('#back');


let openbracks=0,closebracks=0;
let history="",current="";
let equalsPressed=false;

function isOperator(el){
    if(el==='*' || el==="/" || el==='+' || el==='-' || el=='=')return true;
    else return false;
}
function evaluate(){
    if(openbracks===closebracks && current && current.length>0 && !isOperator(current[current.length-1])){
        try{
            history=eval(current); //inbuilt function
        }catch(err){
            console.log(err.message);
        }
        // history=eval(current);
        history_div.innerHTML=history;
    }
    current_div.innerHTML=current;
}

function clear(){
    history="",current="";
    history_div.innerHTML=history;
    current_div.innerHTML=current;
    openbracks=0,closebracks=0;
    equalsPressed=false;
}
function del(){
    if(current && current.length>0){
        current=current.substring(0,current.length-1);
    }
    evaluate();
}
function addToCurrent(key){
    // console.log(key);
    if(equalsPressed===true){
        equalsPressed=false;
        history_div.style.fontSize = '15px';
        current_div.style.fontSize = '45px';
        if(key!='=' && isOperator(key)){
            current=history;
        }else{
            current="",history="";
        }
        
    }
    current+=key;
    if(key==='(')openbracks++;
    else if(key===')')closebracks++;
    evaluate();
    if(key=='='){
        equalsPressed=true;
        history_div.style.fontSize = '45px';
        current_div.style.fontSize = '15px';
        current="";
        current_div.innerHTML=current;
    }
}

for(const num_div of numbers_divs){
    num_div.addEventListener('click',()=>addToCurrent(num_div.id));
}
for(const op_div of operators_divs){
    op_div.addEventListener('click',()=>addToCurrent(op_div.id));
}
clear_div.addEventListener('click',()=>clear());
back_div.addEventListener('click',()=>del());
other_divs[2].addEventListener('click',()=>addToCurrent(other_divs[2].id));
other_divs[3].addEventListener('click',()=>addToCurrent(other_divs[3].id));
console.log(openbracks+" "+closebracks);