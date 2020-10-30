var dollarInput = document.getElementById('dollar');
var poundInput = document.getElementById('pound');
var euroInput = document.getElementById('euro');

function dollarToPoundAndEuro() {
  var usd = parseFloat(dollarInput.value);
  var egp = usd * 15.70;
  var eur = usd * 0.85105;
  poundInput.value = egp;
  euroInput.value = eur;
}

function poundToDollarAndEuro() {
  var egp = parseFloat(poundInput.value);
  var usd = egp / 15.70;
  var eur = egp / 18.44910;
  dollarInput.value = usd;
  euroInput.value = eur;
}

function euroToPoundAndDollar() {
  var eur = parseFloat(euroInput.value);
  var usd = eur * 1.17505;
  var egp = eur * 18.44910;
  dollarInput.value = usd;
  poundInput.value = egp;
}
dollarInput.addEventListener('input', dollarToPoundAndEuro);
poundInput.addEventListener('input', poundToDollarAndEuro);
euroInput.addEventListener('input', euroToPoundAndDollar);
