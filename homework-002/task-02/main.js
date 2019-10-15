document.addEventListener('DOMContentLoaded', function () {
  function waterCounter (land) {
    let right = land.length - 1
    let left = 0
    let rightMax = 0
    let leftMax = 0
    let counter = 0

    while (left < right) {
      leftMax = Math.max(land[left], leftMax)
      rightMax = Math.max(land[right], rightMax)

      if (leftMax >= rightMax) {
        counter += rightMax - land[right--]
      } else {
        counter += leftMax - land[left++]
      }
    }

    return counter
  }

  // const testHill = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6] // 17
  const testHill = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0] // 10
  // const testHill = [7, 0, 1, 3, 4, 1, 2, 1] // 9
  // const testHill = [2, 2, 1, 2, 2, 3, 0, 1, 2] // 4
  // const testHill = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8] // 24
  // const testHill = [2, 2, 2, 2, 2] // 0

  console.log(waterCounter(testHill))
})
