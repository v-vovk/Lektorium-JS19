'use strict'
import './scss/main.scss'

class ParseArr {
  myForEach(arr, callback) {
    let length = arr.length
    for (let i = 0; i < length; ++i) {
      callback(arr[i], i, arr)
    }
  }

  myMap(arr, callback) {
    let newArr = []
    let length = arr.length
    for (let i = 0; i < length; ++i) {
      newArr[i] = callback(arr[i], i, arr)
    }
    return newArr
  }

  myFilter(arr, callback) {
    let newArr = []
    let length = arr.length
    for (let i = 0; i < length; ++i) {
      // newArr[i] = callback(arr[i], i, arr)
      let doesItTrue = callback(arr[i], i, arr)
      if (doesItTrue) {
        newArr.push(arr[i])
      }
    }
    return newArr
  }
}

const count = new ParseArr()
const valera = [1, 2, 5]

// forEach
count.myForEach(valera, (item) => {
  console.log(`forEach: курс долара: ${item} грн, однако здравствуйте`)
})

// map
let boris = count.myMap(valera, (item) => item *= 100)

console.log('')
console.log(`map: у Валери є такі купюри - ${valera}`)
console.log(`map: а у Бориса - ${boris}, бо він не ставить ставки`)

// filter
let anatoliy = count.myFilter(valera, (item) => item != 2)

console.log('')
console.log(`filter: Анатолій відфільтрував купюри Валери, не рівні 2: ${anatoliy}`)
