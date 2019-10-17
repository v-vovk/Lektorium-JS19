
const kassa = document.querySelector('.kassa-container')
const form = kassa.querySelector('.kassa__form')

const moneyAvaible = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
const coinsAvaible = [0.5, 0.25, 0.1, 0.05, 0.02, 0.01]

function countChange (form, bank, cent) {
  const price = form.querySelector('.kassa__price').value
  const moneyWeGet = form.querySelector('.kassa__client-money').value

  const yourChange = []

  let clientChange = moneyWeGet - price
  let coinsChange = clientChange - Math.floor(clientChange)

  clientChange = Math.floor(clientChange)

  bank.forEach(item => {
    if (Math.floor(clientChange / item) >= 1) {
      yourChange.push({
        banknot: item,
        counts: Math.floor(clientChange / item)
      })

      clientChange -= (item * Math.floor(clientChange / item))
    }
  })

  cent.forEach(item => {
    if (Math.floor(coinsChange / item) >= 1) {
      yourChange.push({
        banknot: item,
        counts: Math.floor(coinsChange / item)
      })

      coinsChange -= (item * Math.floor(coinsChange / item))
    }
  })

  return yourChange
}

function makeRender (change, kassa) {
  const changeList = kassa.querySelector('.kassa-change-list')

  let changeListItem = `
      <li class="kassa-change-list__item">
        <span class="key">Купюра:</span>
        <span class="value">Количество:</span>
      </li>
    `
  changeList.innerHTML = changeListItem

  change.forEach(item => {
    console.log(item)
    changeListItem = `
      <li class="kassa-change-list__item">
        <span class="key">₴${item.banknot}</span>
        <span class="value">${item.counts}</span>
      </li>
    `
    changeList.innerHTML += changeListItem
  })
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  makeRender(countChange(form, moneyAvaible, coinsAvaible), kassa)
})
