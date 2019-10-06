let userInputData = prompt('Введи набір рандомних чисел через пробіл для пошуку min max sum', '');
const separator = ' ';
let dataArray = userInputData.split(separator);
let notNumber = [];
let trueNumber = [];

for (let i = 0; i < dataArray.length; i++) {
    let currentNumer = parseInt(dataArray[i]);

    if (!isNaN(currentNumer)) {
        trueNumber.push(currentNumer);
    } else if (isNaN(currentNumer)) {
        notNumber.push(dataArray[i]);
    }
}

let minElem = trueNumber[0];
let maxElem = trueNumber[0];
let sumElem = 0; 

for (let i = 0; i < trueNumber.length; i++) {
    let trueNumberItem = trueNumber[i];

    if (trueNumberItem < minElem) {
        minElem = trueNumberItem;
    } else if (trueNumberItem > maxElem) {
        maxElem = trueNumberItem;
    }

    sumElem += trueNumberItem;
}

console.log(`Було введено такі значення: ${dataArray}`);
console.log(`Сума чисил: ${sumElem}`);
console.log(`Мінімальне число: ${minElem}`);
console.log(`Максимальне число: ${maxElem}`);
console.log(`Помилково введені дані: ${notNumber}`);