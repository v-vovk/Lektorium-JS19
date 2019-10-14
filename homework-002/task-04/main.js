document.addEventListener('DOMContentLoaded', function () {
  const peppa = document.querySelector('.peppa')

  let x = 0
  let y = 0

  function move () {
    peppa.style.left = x + 'px'
    peppa.style.top = y + 'px'
  }
  document.addEventListener('mousemove', function (e) {
    x = e.clientX
    y = e.clientY
  }, false)

  setInterval(move, 100)
})
