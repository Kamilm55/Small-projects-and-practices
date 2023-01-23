const buttonDOM = document.querySelector(`button`)
let rengler =[`blue`,`red`,`yellow`,`black`]


buttonDOM.addEventListener(`click`,degistir)

let index = 0
function degistir() {
    document.body.style.background = rengler[index]
     console.log(rengler[index]);
     index++

     if(index === 4){
        index =0
     }
}