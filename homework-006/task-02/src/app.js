'use strict'
import './scss/main.scss'

let pin = document.querySelector('.tagging-element')
let area = document.querySelector('.tagging-wrapper')

let onMouseMove = function(event) {
  event.preventDefault()
  pin.style.top = event.offsetY + 'px'
  pin.style.left = event.offsetX + 'px'

  console.log(event.offsetX)
  console.log(event.offsetY)

  if (event.offsetY > 512) pin.style.top = '512px'
  if (event.offsetY < 0) pin.style.top = '0px'

  if (event.offsetX > 512) pin.style.left = '512px'
  if (event.offsetX < 0) pin.style.left = '0px'
}

let onMouseUp = function(event) {
  event.preventDefault()
  area.removeEventListener('mousemove', onMouseMove)
  area.removeEventListener('mouseup', onMouseUp)
}

let onMouseDown = function(event) {
  event.preventDefault()
  area.addEventListener('mousemove', onMouseMove)
  area.addEventListener('mouseup', onMouseUp)
}

pin.addEventListener('mousedown', onMouseDown)
