'use strict'

class Vegetable {
  constructor (health = 50, happiness = 50, weight = 84, muscle = 20, money = 1000) {
    this.health = health
    this.happiness = happiness
    this.weight = weight
    this.muscle = muscle
    this.money = money
  }

  // createDiv () {
  //   let elem = document.createElement('div')
  //   document.body.appendChild(elem)
  //   let param = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}`
  //   elem.style.cssText = param
  // }

  drinkWithFriend () {
    this.health -= 10
    this.happiness += 20
    this.weight -= 2
    this.muscle -= 2
    this.money -= 100
  }
}

const yourFriend = new Vegetable(30, 20, 73, 13, 1500)

console.log(yourFriend)
