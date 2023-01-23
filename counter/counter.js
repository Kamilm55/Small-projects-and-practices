const decreaseDOM=document.querySelector(`.decBtn`)
const resetDOM=document.querySelector(`.resetBtn`)
const increaseDOM=document.querySelector(`.incBtn`)


let numberDOM=document.querySelector(`.numberJS`);

decreaseDOM.addEventListener(`click`,decFunc);
resetDOM.addEventListener(`click`,resetFunc);
increaseDOM.addEventListener(`click`,incFunc);

numberDOM.innerHTML = 0
let counterNumber = parseInt( numberDOM.innerHTML)


function decFunc () {
    counterNumber--;
    numberDOM.innerHTML--;
/* return counterNumber = parseInt(numberDOM.innerHTML) */
}

function resetFunc () {
    numberDOM.innerHTML = 0

/* return counterNumber = parseInt(numberDOM.innerHTML) */
}

function incFunc () {
    counterNumber++;
    numberDOM.innerHTML++;
/*  return   counterNumber = parseInt(numberDOM.innerHTML) */
}


   
 if(parseInt(numberDOM.innerHTML) > 0){
    document.querySelector(`.numberJS`).style.color = `blue`;
}
else if(parseInt(numberDOM.innerHTML)  < 0 ){
    document.querySelector(`.numberJS`).style.color = `red`;
}
else if(parseInt(numberDOM.innerHTML)  == 0){
    document.querySelector(`.numberJS`).style.color = `black`;

}


localStorage.setItem(`counterNumber`,numberDOM.innerHTML)
localStorage.getItem(`counterNumber`)