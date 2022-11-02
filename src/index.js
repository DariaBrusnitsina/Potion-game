import * as CONSTANT from "./constants.js"
import { finishGame } from "./finish-game.js"
import { potions } from "./potions.js"
import { createGameBoard, createGameConditions} from "./start-game-functions.js"

export let time = 0
export let score = 0

CONSTANT.timeList.addEventListener("click", event => {
  if (event.target.classList.contains("time-btn")) {
    time = parseInt(event.target.getAttribute("data-time"))
    CONSTANT.screens[0].classList.add("up")
    
    startGame()
  }
})

function startGame() {
  createGameBoard()
  createGameConditions()
  refreshScore()

  const timer = new Timer(function() {
    if (time === 0) {
      finishGame()
      timer.stop()
    } else {
      let current = --time
      
      if (current < 10) {
        current = `0${current}`
      }
      setTime(current)
    }
  }, 1000)

  setTime(time)
}

// function decreaseTime() {
//     if (time === 0) {
//       finishGame()
//     } else {
//       let current = --time
      
//       if (current < 10) {
//         current = `0${current}`
//       }
//       setTime(current)
//     }
//     console.log(time)
// }

function setTime(value) {
    CONSTANT.timeEl.innerHTML = `00:${value}`
}

// Счёт и его обновление
function refreshScore() {
  const myScore = document.querySelector(".score")
  if (score < 10) {
    myScore.innerText = `${score}`
    myScore.style.color = "#DB6E5E"
  } else if (score >= 10 && score < 15) {
    myScore.innerText = `${score}`
    myScore.style.color = "#DBAD5E"
  } else if (score > 15) {
    myScore.innerText = `${score}`
    myScore.style.color = "#cbdb5e"
  }
}

//Событие клика по зелью
CONSTANT.board.addEventListener("click", event => {
  const findThisPotion = document.querySelector(".potion-example")

  if (event.target.id === findThisPotion.id) {
    score++
    refreshScore()
    potions.sort(() => Math.random() - 0.5)
    CONSTANT.board.innerHTML = ""
    createGameBoard()
    CONSTANT.condition.innerHTML = ""
    createGameConditions()

  } else {
    const button = event.target.closest("img")
    
    if (button) {
      event.target.style.background = "rgba(178, 29, 17, 0.50)"
    }
   }
})

CONSTANT.reStartBtn.addEventListener("click", event => {
  CONSTANT.screens[0].classList.remove("up")
  CONSTANT.screens[1].classList.remove("up")
  time = ""
  score = "0"
  CONSTANT.screens[1].classList.add( "down")
})



function Timer(fn, t) {
  var timerObj = setInterval(fn, t);

  this.stop = function() {
      if (timerObj) {
          clearInterval(timerObj);
          timerObj = null;
      }
      return this;
  }

  // start timer using current settings (if it not already running)
  this.start = function() {
      if (!timerObj) {
          this.stop();
          timerObj = setInterval(fn, t);
      }
      return this;
  }

  // start with new interval, stop current interval
  this.reset = function(newT) {
      t = newT;
      return this.stop().start();
  }
}