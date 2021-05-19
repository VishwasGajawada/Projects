const message_p = document.querySelector('#message');
const reset_div = document.querySelector(".reset");
const cell_divs = document.querySelectorAll('.cell');

let gameStat=true;
let xturn=true;

function handleWin(winner){
    console.log(winner+" won");
    gameStat=false;
    message_p.innerHTML = winner + " has WONNNN ";
}

function checkGame(){
    const c00 = cell_divs[0].classList[1];
    const c01 = cell_divs[1].classList[1];
    const c02 = cell_divs[2].classList[1];
    const c10 = cell_divs[3].classList[1];
    const c11 = cell_divs[4].classList[1];
    const c12 = cell_divs[5].classList[1];
    const c20 = cell_divs[6].classList[1];
    const c21 = cell_divs[7].classList[1];
    const c22 = cell_divs[8].classList[1];

    if(c00 && c00===c01 && c00===c02)handleWin(c00);
    else if(c10 && c10===c11 && c10===c12)handleWin(c10);
    else if(c20 && c20===c21 && c20===c22)handleWin(c20);
    else if(c00 && c00===c10 && c00===c20)handleWin(c00);
    else if(c01 && c01===c11 && c01===c21)handleWin(c01);
    else if(c02 && c02===c12 && c02===c22)handleWin(c02);
    else if(c00 && c00===c11 && c00===c22)handleWin(c00);
    else if(c02 && c02===c11 && c02===c20)handleWin(c02);
    else if(c00 && c01 && c02 && c10 && c11 && c12 && c20 && c21 && c22){
        message_p.innerHTML = "Game is TIED!!";
        gameStat=false;
    }else{
        if(xturn){
            message_p.innerHTML = "O's turn";
        }else{
            message_p.innerHTML = "X's turn";
        }
        xturn=!xturn;
    }
}

function handleClick(cell_id){
    const cell_div = document.querySelector("#"+cell_id);
    const cell_p = document.querySelector("#"+cell_id+" p");
    if(!gameStat || cell_div.classList[1]=='x' || cell_div.classList[1]=='o')return;
    if(xturn){
        cell_div.classList.add('x'); //to mark that cell is selected by X
        cell_p.innerHTML="×";
        checkGame();
    }else{
        cell_div.classList.add('o'); //to mark that cell is selected by O
        cell_p.innerHTML="○";
        checkGame();
    }
}

function reset(){
    xturn=true;
    message_p.innerHTML = "X's turn";
    for(const cell of cell_divs){
        cell.classList.remove('x');
        cell.classList.remove('o');
        const cell_p = document.querySelector("#"+cell.id+" p");
        cell_p.innerHTML="";
    }
    gameStat=true;
}
for (const cell of cell_divs){
    cell.addEventListener('click',()=>handleClick(cell.id));
}

reset_div.addEventListener('click',()=>reset());



