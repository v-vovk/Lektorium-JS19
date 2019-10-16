document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.kassa__form')
  const priceInput = document.querySelector('.kassa__price')
  const clientMoneyInput = document.querySelector('.kassa__client-money')
  const changeList = document.querySelector('.kassa-change-list')

  function countChange (change, moneyWeHave) {
    const yourChange = []

    moneyWeHave.forEach(item => {
      if (Math.floor(change / item) >= 1) {
        yourChange.push({
          Купюра: item,
          Количество: Math.floor(change / item)
        })

        const changeListItem = `
          <li class="kassa-change-list__item">
            <span class="key">₴${item}</span>
            <span class="value">${Math.floor(change / item)}</span>
          </li>
        `

        changeList.innerHTML += changeListItem

        change -= (item * Math.floor(change / item))
      }
    })

    return yourChange
  }

  function countCoinsChange (change, moneyWeHave) {
    const yourCoinsChange = []

    moneyWeHave.forEach(item => {
      if (Math.floor(change / item) >= 1) {
        yourCoinsChange.push({
          Монета: item,
          Количество: Math.floor(change / item)
        })

        const changeListItem = `
          <li class="kassa-change-list__item">
            <span class="key">₴ ${item}</span>
            <span class="value">${Math.floor(change / item)}</span>
          </li>
        `

        changeList.innerHTML += changeListItem

        change -= (item * Math.floor(change / item))
      }
    })

    return yourCoinsChange
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const changeListItem = `
      <li class="kassa-change-list__item">
        <span class="key">Купюра:</span>
        <span class="value">Количество:</span>
      </li>
    `
    changeList.innerHTML = changeListItem

    const moneyWeGet = clientMoneyInput.value
    const price = priceInput.value

    let clientChange = moneyWeGet - price
    const coinsChange = clientChange - Math.floor(clientChange)

    clientChange = Math.floor(clientChange)

    const coinsAvaible = [0.5, 0.25, 0.1, 0.05, 0.02, 0.01]
    const moneyAvaible = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]

    countChange(clientChange, moneyAvaible)
    countCoinsChange(coinsChange, coinsAvaible)
  })
})
