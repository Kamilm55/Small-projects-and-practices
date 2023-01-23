const btnDOM = document.querySelector(`.changeBtn`)
const text = document.querySelector(`.mainText`)

const hexElements = [0,1,2,3,4,5,6,7,8,9,`A`,`B`,`C`,`D`,`E`,`F`]


btnDOM.addEventListener(`click`,changeBg  )
/* let hex = `#` */

function randomFunc () {

 return  hexElements[ Math.floor( Math.random() * hexElements.length ) ]
}

function changeBg () {
 
 let  hex = `#`
  for(let i=0 ; i<6 ;i++){
    let randomNumber = randomFunc()
      hex = hex + randomNumber
            
  }
  text.innerHTML = `Background Color(hex):${hex}`
  document.body.style.backgroundColor = `${hex}`
 
}