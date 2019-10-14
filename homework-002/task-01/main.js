// first exemple
// const dataArray = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 21, 4, -2-3-1]

// second exemple
// const dataArray = [-1, -8, -2]

// third exemple
// const dataArray = [1, 7, 3]

// 4 exemple
// const dataArray = [1, undefined, 3, 5, -3]

// 5 exemple
const dataArray = [1, NaN, 3, 5, -3]

function checkInputData (array) {
  const notNumber = [] // for data, that is not a number
  const trueNumber = [] // for real numbers

  array.forEach(item => {
    const currentItem = parseInt(item)
    if (!isNaN(currentItem)) {
      trueNumber.push(currentItem)
    } else {
      notNumber.push(`${item}`)
    }
  })

  if (notNumber.length > 0) {
    console.log(`Не було враховано: ${notNumber}`)
  }

  return trueNumber
}

function minArrayItem (array) {
  return array.reduce((a, b) => (a > b) ? b : a)
}

function maxArrayItem (array) {
  return array.reduce((a, b) => (a > b) ? a : b)
}

function sumOfArrayItems (array) {
  return array.reduce((a, b) => a + b, 0)
}

function allArraysValue (array, min, max, sum) {
  return {
    min: min(array),
    max: max(array),
    sum: sum(array)
  }
}

console.table(allArraysValue(checkInputData(dataArray), minArrayItem, maxArrayItem, sumOfArrayItems))
