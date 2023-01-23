const secondDOM = document.querySelector(`.second`)
const minuteDOM = document.querySelector(`.minute`)
const hourDOM = document.querySelector(`.hour`)

 setInterval(starterFunc , 1000)

function starterFunc () { // ClockGrab must be in right position 
    let currentTime = new Date()
    let currentSecond = currentTime.getSeconds()
    let currentMinute = currentTime.getMinutes()
    let currentHour = currentTime.getHours()

    
    transformingFunc(secondDOM,currentSecond)
    transformingFunc(minuteDOM,currentMinute)
    transformingFunc(hourDOM,currentHour)
}


function transformingFunc  (timeDOM,time)  {
    timeDOM.style.transform = `rotate(${90 + (6 * time) }deg)`
    timeDOM.style.transition = `all 1s cubic-bezier(0.075, 0.82, 0.165, 1)`
 // rotate 90 + ( 6 * time)
 // because 90deg is default value for stylig crabs to 12
}


 
