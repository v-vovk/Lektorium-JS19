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

  for (let i = 0; i < array.length; i++) {
    const currentItem = parseInt(array[i])
    if (!isNaN(currentItem)) {
      trueNumber.push(currentItem)
    } else {
      notNumber.push(`${array[i]}`)
    }
  }

  if (notNumber.length > 0) {
    console.log(`Не було враховано: ${notNumber}`)
  }

  return trueNumber
}

function minArrayItem (array) {
  let minElem = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minElem) {
      minElem = array[i]
    }
  }
  return minElem
}

function maxArrayItem (array) {
  let maxElem = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxElem) {
      maxElem = array[i]
    }
  }
  return maxElem
}

function sumOfArrayItems (array) {
  let sumElem = 0
  for (let i = 0; i < array.length; i++) {
    sumElem += array[i]
  }
  return sumElem
}

console.log(`Min число: ${minArrayItem(checkInputData(dataArray))}`)
console.log(`Max число: ${maxArrayItem(checkInputData(dataArray))}`)
console.log(`Сума чисил: ${sumOfArrayItems(checkInputData(dataArray))}`)
