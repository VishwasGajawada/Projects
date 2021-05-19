const message_p = document.querySelector('#message');
const reset_div = document.querySelector(".reset");
const cell_divs = document.querySelectorAll(".cell");

let gameStat=true;
let xturn=true;

const handleWin = (winner) =>{
    gameStat=false;
    message_p.innerHTML = winner + " has WONNNN ";
}

const checkGame = ()=>{
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
    else if(c00 && c00===c11 && c00===c22)handleClick(c00);
    else if(c02 && c02===c11 && c02===c20)handleClick(c02);
    else if(c00 && c01 && c02 && c10 && c11 && c12 && c20 && c21 && c22){
        message_p.innerHTML = "Game is TIED!!";
        gameStat=false;
    }
}

const handleClick = (e) => {
    // if(gameStat===false)return;
    console.log(e.target);
    const classList = e.target.classList;
    const location = e.target.id;
    const cell_p = document.querySelector("#"+location+" p")
    if(classList[1]==='x' || classList[1]==='o')return;
    if(xturn){
        classList.add('x'); //to mark that cell is selected by X
        cell_p.innerHTML="×";
        message_p.innerHTML = "O's turn";
        checkGame();
    }else{
        classList.add('o'); //to mark that cell is selected by O
        cell_p.innerHTML="○";
        message_p.innerHTML = "X's turn";
        checkGame();
    }
    xturn=!xturn;
}

for (const cell of cell_divs){
    cell.addEventListener('click',handleClick);
}

// reset_div.addEventListener('click',reset);



