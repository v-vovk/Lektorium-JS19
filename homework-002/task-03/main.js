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

  form.addEventListener('submit', () => {
    const moneyWeGet = clientMoneyInput.value
    const price = priceInput.value

    const clientChange = moneyWeGet - price
    const moneyAvaible = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]

    countChange(clientChange, moneyAvaible)
  })
})
