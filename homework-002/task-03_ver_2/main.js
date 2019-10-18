
const kassa = document.querySelector('.kassa-container')
const form = kassa.querySelector('.kassa__form')

const moneyAvaible = [
  {
    banknot: 1000,
    counts: 40
  },
  {
    banknot: 500,
    counts: 40
  },
  {
    banknot: 200,
    counts: 40
  },
  {
    banknot: 100,
    counts: 40
  },
  {
    banknot: 50,
    counts: 40
  },
  {
    banknot: 20,
    counts: 40
  },
  {
    banknot: 10,
    counts: 40
  },
  {
    banknot: 5,
    counts: 40
  },
  {
    banknot: 2,
    counts: 40
  },
  {
    banknot: 1,
    counts: +Infinity
  },
  {
    banknot: 0.5,
    counts: 40
  },
  {
    banknot: 0.25,
    counts: 40
  },
  {
    banknot: 0.1,
    counts: 40
  },
  {
    banknot: 0.05,
    counts: 40
  },
  {
    banknot: 0.02,
    counts: 40
  },
  {
    banknot: 0.01,
    counts: Infinity
  }
]

function countChange (form, bank) {
  const price = form.querySelector('.kassa__price').value
  const moneyWeGet = form.querySelector('.kassa__client-money').value

  const yourChange = []

  let clientChange = moneyWeGet - price

  bank.forEach(item => {
    if ((item.counts > 0) && (Math.floor(clientChange / item.banknot) >= 1)) {
      yourChange.push({
        banknot: item.banknot,
        counts: Math.floor(clientChange / item.banknot)
      })

      clientChange -= (item.banknot * Math.floor(clientChange / item.banknot))
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
    changeListItem = `
      <li class="kassa-change-list__item">
        <span class="key">₴${item.banknot}</span>
        <span class="value">${item.counts}</span>
      </li>
    `
    changeList.innerHTML += changeListItem
  })

  return change
}

function lostMoney (array) {
  moneyAvaible.forEach(item => {
    array.forEach(banknot => {
      if (item.banknot === banknot.banknot) {
        item.counts -= banknot.counts
      }
    })
  })
  return moneyAvaible
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  // lostMoney(makeRender(countChange(form, moneyAvaible), kassa))
  console.table(lostMoney(makeRender(countChange(form, moneyAvaible), kassa)))
})
