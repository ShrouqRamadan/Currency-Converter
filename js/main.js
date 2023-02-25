var amount = document.getElementById('amount');
var currencyFrom = document.getElementById('currency-from');
var currencyTo = document.getElementById('currency-to');
var converterBtn = document.querySelector('button')
var amountUser = document.querySelector('p')
// console.log(amountUser);
var resulttUser = document.querySelector('.result')
// console.log(currencyTo.value);

var myHttp = new XMLHttpRequest();

function getResult(result) {
    myHttp.open('GET', `https://api.exchangerate.host/latest?/source=ecb&base=${result}`);
    myHttp.send()

    myHttp.addEventListener('readystatechange', function () {

        if (myHttp.readyState == 4) {
            var allData = JSON.parse(myHttp.response).rates;
            var currencyToValue = currencyTo.value;
            var currencyFromValue = currencyFrom.value;
            var solution = amount.value * allData[currencyToValue] + currencyToValue;
            amountUser.innerHTML = amount.value + currencyFromValue;
            resulttUser.innerHTML = solution;

        }


    })
}

converterBtn.addEventListener('click', function () {
    document.querySelector('.equal').classList.remove('d-none')
    var currencyFromValue = currencyFrom.value;

    getResult(currencyFromValue)
})

