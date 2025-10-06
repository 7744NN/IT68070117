let account = 1000;
let cash = 1000;

function setBalance() {
  account = parseFloat(document.getElementById('accountBalance').value) || 0;
  cash = parseFloat(document.getElementById('cashBalance').value) || 0;
  addHistory(`Set balance → Account: ${account}, Cash: ${cash}`);
}

function proceed() {
  let amt = parseFloat(document.getElementById('amount').value) || 0;
  let type = document.getElementById('operationType').value;

  if (type === "deposit") {
    account += amt;
    cash -= amt;
    addHistory(`Deposited ${amt}`);
  } else {
    account -= amt;
    cash += amt;
    addHistory(`Withdrew ${amt}`);
  }

  document.getElementById('accountBalance').value = account;
  document.getElementById('cashBalance').value = cash;
}

function addHistory(msg) {
  let history = document.getElementById('history');
  history.value += "\n" + msg;
}

function convert() {
  const input = parseFloat(document.getElementById('inputBalance').value) || 0;
  const currency = document.getElementById('currency').value;
  let output = 0;

  if (currency === "USD") output = input * 36;  // USD → THB
  else output = input / 36;                     // THB → USD

  document.getElementById('outputBalance').value = output.toFixed(2);
  addHistory(`Converted ${input} ${currency}`);
}
