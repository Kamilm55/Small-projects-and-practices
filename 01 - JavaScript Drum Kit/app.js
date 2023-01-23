const btnsDOM = document.querySelectorAll(`.key`)
const audiosDOM = document.querySelectorAll(`audio`)

window.addEventListener(`keydown`,playSound)

function playSound (event) {
    for (const btn of btnsDOM){
        if(event.keyCode == btn.getAttribute(`data-key`)){
            animations(btn)
            audiosDOM.forEach(audio => {
                if(event.keyCode == audio.getAttribute(`data-key`)){
                    repeatedPress(audio)
                    audio.play()
                }
            })
        }
    }
}

function repeatedPress (audio) {
    audio.currentTime = 0
}

const animations = (btn) => {
    btn.classList.add(`playing`)
    btn.style.transition = `all 0.1s`
    btn.addEventListener(`transitionend`,transitionEnd)
}   

function transitionEnd (event) {
    console.log(this);
    this.classList.remove(`playing`)
}