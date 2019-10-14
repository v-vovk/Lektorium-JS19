document.addEventListener('DOMContentLoaded', function () {
  const peppa = document.querySelector('.peppa')
  const mangal = document.querySelector('.mangal')

  let xPeppa = 0
  let yPeppa = 0

  let xMangal = 0
  let yMangal = 0

  function moveMangal () {
    mangal.style.left = xMangal + 'px'
    mangal.style.top = yMangal + 'px'
  }

  function movePeppa () {
    peppa.style.left = xPeppa + 'px'
    peppa.style.top = yPeppa + 'px'
  }

  function playSound () {
    const audio = document.querySelector('audio[data-pig="pig"]')
    if (!audio) return // stop function

    audio.currentTime = 0 // rewind to the start
    audio.play()
  }

  function startGrill (e) {
    xPeppa = e.clientX
    yPeppa = e.clientY

    const minX = 0
    const maxX = document.documentElement.clientWidth
    const randomX = Math.random() * (maxX - minX) + minX

    const minY = 0
    const maxY = document.documentElement.clientHeight
    const randomY = Math.random() * (maxY - minY) + minY

    xMangal = randomX
    yMangal = randomY
  }

  function checkPigDie () {
    const peppaRect = peppa.getBoundingClientRect()
    const mangalRect = mangal.getBoundingClientRect()

    if (peppaRect.bottom > mangalRect.top && peppaRect.top < mangalRect.bottom && peppaRect.right > mangalRect.left && peppaRect.left < mangalRect.right) {
      playSound()
    }
  }

  document.addEventListener('mousemove', startGrill, false)
  document.addEventListener('mousemove', checkPigDie, false)

  setInterval(moveMangal, 500)
  setInterval(movePeppa, 500)
})
