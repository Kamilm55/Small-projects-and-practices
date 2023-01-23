const inputsDOM = document.querySelectorAll(`input`)

function updateValue() {
    if(this.name === `base`){
        document.documentElement.style.setProperty(`--${this.name}`,`${this.value}`)
    }
    else{
        document.documentElement.style.setProperty(`--${this.name}`,`${this.value}px`)
    }
}

inputsDOM.forEach( input => {
  input.addEventListener(`change`,updateValue)
}
)