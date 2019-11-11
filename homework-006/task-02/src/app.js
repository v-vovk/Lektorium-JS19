'use strict'
import './scss/main.scss'

const pin = document.querySelector('.tagging-element')
const area = document.querySelector('.tagging-wrapper')

const onMouseMove = e => {
  e.preventDefault()

  const boxArea = area.getBoundingClientRect()

  pin.style.top = e.clientY - boxArea.y + 'px'
  pin.style.left = e.clientX - boxArea.x + 'px'

  const pinClose = pin.querySelector('.delete')
  pinClose.classList.remove('hide')

  console.log(e.clientX - boxArea.x)
  console.log(e.clientY - boxArea.y)

  if (e.clientY - boxArea.y > 512) pin.style.top = '512px'
  if (e.clientY - boxArea.y < 0) pin.style.top = '0px'

  if (e.clientX - boxArea.x > 512) pin.style.left = '512px'
  if (e.clientX - boxArea.x < 0) pin.style.left = '0px'
}

const onMouseUp = e => {
  e.preventDefault()
  area.removeEventListener('mousemove', onMouseMove(area))
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
