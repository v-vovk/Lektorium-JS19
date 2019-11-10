'use strict'
import './scss/main.scss'

const pin = document.querySelector('.tagging-element')
const area = document.querySelector('.tagging-wrapper')

const onMouseMove = e => {
  e.preventDefault()
  pin.style.top = e.offsetY + 'px'
  pin.style.left = e.offsetX + 'px'

  const pinClose = pin.querySelector('.delete')
  pinClose.classList.remove('hide')

  console.log(e.offsetX)
  console.log(e.offsetY)

  if (e.offsetY > 512) pin.style.top = '512px'
  if (e.offsetY < 0) pin.style.top = '0px'

  if (e.offsetX > 512) pin.style.left = '512px'
  if (e.offsetX < 0) pin.style.left = '0px'
}

const onMouseUp = e => {
  e.preventDefault()
  area.removeEventListener('mousemove', onMouseMove)
  area.removeEventListener('mouseup', onMouseUp)

  const pinClose = pin.querySelector('.delete')
  pinClose.classList.add('hide')
}

const onMouseDown = e => {
  e.preventDefault()
  area.addEventListener('mousemove', onMouseMove)
  area.addEventListener('mouseup', onMouseUp)
}

pin.addEventListener('mousedown', onMouseDown)
