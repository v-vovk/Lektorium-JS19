"use strict"

import "bootstrap-4-grid"
import "normalize.css"
import "./scss/main.scss"

class IncreasingCounter {
  constructor () {
    this._count = 0
  }

  get value () {
    return this._count
  }

  increment () {
    this._count++
  }

  decrement () {
    this._count--
  }
}

const counter = new IncreasingCounter()

console.log(counter.value)
counter.increment()
counter.increment()
counter.increment()
counter.decrement()
console.log(counter.value)
counter._count = 37
console.log(counter.value)
