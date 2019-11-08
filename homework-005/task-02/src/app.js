'use strict'
import './scss/main.scss'

const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.task')
const items = JSON.parse(localStorage.getItem('items')) || []

function addItem (e) {
  e.preventDefault()
  const text = (this.querySelector('[name=item]')).value
  const item = {
    text,
    done: false
  }

  items.push(item)
  taskList(items, itemsList)
  localStorage.setItem('items', JSON.stringify(items))
  this.reset()
}

function taskList (tasks = [], taskList) {
  taskList.innerHTML = tasks.map((tasks, i) => {
    return `
      <li>
        <input type="checkbox" data-job="complete" data-index=${i} id="item${i}" ${tasks.done ? 'checked' : ''} />
        <label for="item${i}">${tasks.text}</label>
        <div class="remove" data-job="delete" data-index=${i}>x</>
      </li>
    `
  }).join('')

  selectedCounter()
}

function toggleDone (e) {
  const el = e.target
  const elementJob = el.dataset.job
  const index = el.dataset.index

  if (elementJob === 'complete') {
    if (!e.target.matches('input')) return
    items[index].done = !items[index].done
    localStorage.setItem('items', JSON.stringify(items))
    taskList(items, itemsList)
  } else if (elementJob === 'delete') {
    el.parentNode.parentNode.removeChild(el.parentNode)
    items.splice(index, 1)
    localStorage.setItem('items', JSON.stringify(items))
    taskList(items, itemsList)
  }
}

function selectedCounter () {
  const checked = document.querySelectorAll('input:checked')
  const counterWrap = document.querySelector('.counter')
  const counter = counterWrap.querySelector('.counter-value')

  if (checked.length === 0) {
    counter.innerHTML = 0
  } else {
    counter.innerHTML = checked.length
  }
}

addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleDone)
taskList(items, itemsList)
