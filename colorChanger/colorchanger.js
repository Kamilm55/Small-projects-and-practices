let bgColorDOM = document.querySelector(`.mainText`)
let btnDOM = document.querySelector(`.changeBtn`)


btnDOM.addEventListener(`click`, changeColor )

let allColors = [`Red`,`Green`,`Blue`,`Pink`,`Brown`,`Yellow`,`Orange` ]

let index=0


function changeColor () {
    if(index == allColors.length )   {
        index =0
    } 
    console.log(allColors[index]);
    bgColorDOM.innerHTML=`Background Color: ${allColors[index]}`
    document.body.style.backgroundColor = allColors[index]
    index++;
}
