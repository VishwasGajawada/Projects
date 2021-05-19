let userScore=0;
let compScore=0;
const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("comp-score");
const scoreBoard_div = document.querySelector("score-board");
const result_p=document.querySelector(".result p");
const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const scissors_div=document.getElementById("scissors");
const user_label = document.getElementById("user-label");
const comp_label = document.getElementById("comp-label");

function getRand(){
    choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*3)];
}

function won(userChoice,compChoice){
    userScore++;
    result_p.innerHTML = userChoice+" beats "+compChoice+". You win";
    user_label.classList.add('green-glow');
    comp_label.classList.add('red-glow');
    setTimeout(function(){user_label.classList.remove('green-glow');
                          comp_label.classList.remove('red-glow');},300);
}
function lose(userChoice,compChoice){
    compScore++;
    result_p.innerHTML = userChoice+" loses to "+compChoice+". You lose";
    user_label.classList.add('red-glow');
    comp_label.classList.add('green-glow');
    setTimeout(function(){user_label.classList.remove('red-glow');
                         comp_label.classList.remove('green-glow');},300);
}
function draw(userChoice,compChoice){
    userScore++;compScore++;
    result_p.innerHTML = userChoice+" = "+compChoice+" . It's a draw";
    user_label.classList.add('gray-glow');
    comp_label.classList.add('gray-glow');
    setTimeout(function(){user_label.classList.remove('gray-glow');
                          comp_label.classList.remove('gray-glow');},300);
}

function run(userChoice){
    const compChoice = getRand();
    console.log(userChoice+" "+compChoice);
    const temp = userChoice+compChoice;
    switch (temp){
        case "paperscissors":
        case "scissorsrock":
        case "rockpaper":
            lose(userChoice,compChoice);
            break;
        case "scissorspaper":
        case "rockscissors":
        case "paperrock":
            won(userChoice,compChoice);
            break;
        default:
            draw(userChoice,compChoice);
    }
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
}

function main(){
    rock_div.addEventListener('click',() => run("rock"));
    paper_div.addEventListener('click',() => run("paper"));
    scissors_div.addEventListener('click',() => run("scissors"));
}
main();
