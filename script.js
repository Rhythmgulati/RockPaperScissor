const choices = document.querySelectorAll(".choices img");
const output = document.querySelector(".outputsection h2");
const outputsection = document.querySelector(".outputsection")
const userscore = document.querySelector(".ourscore h2");
const compscore = document.querySelector(".compscore h2");
let userscorevalue = 0;
let computerscorevalue = 0;

const computerwin = (ch) => {
    output.innerText = `Computer wins || Computer choice - ${ch}`;
    computerscorevalue += 1;
    compscore.innerText=computerscorevalue;
    outputsection.style.backgroundColor="red";
}
const userwin = (ch) =>{
    output.innerText = `You win || Computer choice - ${ch}`;
    userscorevalue += 1;
    userscore.innerText=userscorevalue;
    outputsection.style.backgroundColor="green";
}
const draw = ()=>{
    output.innerText = "It's a draw";
    outputsection.style.backgroundColor=" rgb(36, 36, 180)";
}

const getcomputerchoice = () =>{
    const options = ["rock","paper","scissor"];
    const rn = Math.floor(Math.random()*3);
    return options[rn];
}

const playgame = (userchoice) =>{
   const compchoice =  getcomputerchoice();
   console.log(compchoice);
   if(userchoice==compchoice){
      draw();
   }else{
   if(userchoice=="rock"){
        if(compchoice=="paper"){
           computerwin("paper");
        }else{
           userwin("scissor");
        }
   }
   else if(userchoice =="paper"){
    if(compchoice=="scissor"){
        computerwin("scissor");
    }else{
        userwin("rock");
    }
}
    else{
        if(compchoice=="rock"){
            computerwin("rock");
        }else{
            userwin("paper");
        }
    }
}
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
    });
})