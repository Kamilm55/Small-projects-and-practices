const questionsDOM = document.querySelectorAll(`.question`)
const btn = document.querySelectorAll(`.bi-plus-square`)
const btn2 = document.querySelectorAll(`.bi-dash-square`)





    btn.forEach( item =>{
        item.addEventListener(`click` , function (){
        
            let firstParent =this.parentElement
        
            firstParent.parentElement.classList.remove(`hide-text`)
            firstParent.parentElement.classList.toggle(`show-text`)
        } )
    })

    btn2.forEach(item=>{
        item.addEventListener(`click`, function (){
            let firstParent =this.parentElement
            firstParent.parentElement.classList.remove(`hide-text`)
            firstParent.parentElement.classList.toggle(`show-text`)
        })
    })
