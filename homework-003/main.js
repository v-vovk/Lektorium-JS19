'use strict'

class Vegetable {
  constructor (health = 50, happiness = 50, weight = 84, muscle = 20, money = 1000, depresion = 100, rip = false) {
    this.health = health
    this.happiness = happiness
    this.weight = weight
    this.muscle = muscle
    this.money = money
    this.depresion = depresion
    this.rip = rip
  }

  drinkWithFriend () {
    if (this.health === 0 || this.depresion >= 100) {
      this.rip = true
    }
    if (this.health >= 10) {
      this.health -= 10
    }
    this.happiness += 20
    if (this.weight >= 30) {
      this.weight -= 2
    }
    if (this.muscle >= 5) {
      this.muscle -= 2
    }
    if (this.money >= 100) {
      this.money -= 100
    }
    this.depresion -= 10
  }

  eat () {
    if (this.health === 0 || this.depresion >= 100 || this.muscle === 0) {
      this.rip = true
    }
    this.health += 10
    this.happiness += 20
    this.weight += 5
    this.muscle += 1
    if (this.money >= 100) {
      this.money -= 50
    }
    this.depresion -= 10
  }

  walk () {
    if (this.health === 0 || this.depresion >= 100 || this.muscle === 0) {
      this.rip = true
    }
    this.health += 10
    this.happiness += 10
    if (this.weight >= 1) {
      this.weight -= 1
    }
    this.muscle += 1
    this.depresion -= 10
  }

  sleep () {
    if (this.health === 0 || this.depresion >= 100 || this.muscle === 0) {
      this.rip = true
    }
    this.health += 20
    this.happiness += 30
    this.depresion -= 10
  }

  died () {
    if (this.health === 0 || this.muscle === 0 || this.depresion >= 100 || this.happiness <= 0) {
      this.rip = true
      console.log('твій друг-овоч помер')
    } else {
      this.rip = false
    }
  }

  goAway () {
    if (this.health <= 10 || this.muscle <= 5 || this.depresion >= 80 || this.happiness <= 10) {
      console.log('твій друг-овоч втік')
    }
  }
}

const yourFriend = new Vegetable(30, 20, 73, 13, 1500, 23)

console.log(yourFriend)
