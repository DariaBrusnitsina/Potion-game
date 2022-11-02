import { board, condition, timeEl } from "./constants.js"
import { getRandom } from "./get-random.js"
import { potions } from "./potions.js"

export function createGameBoard() {
    
    potions.forEach(element => {
      const potion = document.createElement("img")

      potion.classList.add("potion")
      potion.src = `${element.url}`
      potion.id = `${element.id}`

      board.append(potion)
    })  
}

export function createGameConditions() {
    
    const findThisPotionNumber = getRandom(0, potions.length-1)
    const findThisPotion = potions[findThisPotionNumber]
    
    const potionCondition = document.createElement("img")
    potionCondition.classList.add("potion-example")
    potionCondition.src = `${findThisPotion.url}`
    potionCondition.id = `${findThisPotion.id}`
    
    condition.append(potionCondition)
}