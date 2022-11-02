import * as CONSTANT from "./constants.js"
import { score } from "./index.js"


export function finishGame() {
    // timer.stop()

    CONSTANT.screens[1].classList.add("up")
    
     if (score < 10) {
       CONSTANT.spanScore.innerText = score
       CONSTANT.text.innerText = CONSTANT.result1
       CONSTANT.img.src = CONSTANT.img1
  
    } else if (score >= 10 && score < 15) {
      CONSTANT.spanScore.innerText = score
      CONSTANT.text.innerText = CONSTANT.result2
      CONSTANT.img.src = CONSTANT.img2
  
    } else if (score > 15) {
      CONSTANT.spanScore.innerText = score
      CONSTANT.text.innerText = CONSTANT.result3
      CONSTANT.img.src = CONSTANT.img3
    }
    CONSTANT.board.innerHTML =""
    CONSTANT.condition.innerHTML=""

}