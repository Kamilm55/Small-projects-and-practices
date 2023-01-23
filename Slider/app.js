const rightBtn = document.querySelector(`.bi-chevron-right`)
const leftBtn = document.querySelector(`.bi-chevron-left`)
const slider = document.querySelector(`.slider`)

rightBtn.addEventListener(`click`, toRight) 
leftBtn.addEventListener(`click`, toLeft) 

let counter=0
function toRight () {

    if(counter<=300){
            
        counter+=100
        slider.style.transform = `translateX(-${counter}vw)`
        slider.style.transition = `1s`
        console.log(counter)
    }
    else if(counter>300){
        counter = counter - 400
        slider.style.transform = `translateX(-${counter}vw)`
        slider.style.transition = `0s`
        console.log(counter)
    }
}

function toLeft () {
console.log(`claiss`);
    if(counter>0 && counter<=100){
            counter-=100
        slider.style.transform = `translateX(${counter}vw)`
        slider.style.transition = `1s`
        console.log(counter)
    }
    else if(counter>100){
        counter-= 100
        slider.style.transform = `translateX(-${counter}vw)`
        slider.style.transition = `1s`
        console.log(counter)
    }
    else if(counter==0){
        counter+=400
        slider.style.transform = `translateX(-${counter}vw)`
        slider.style.transition = `0s`
    }
}