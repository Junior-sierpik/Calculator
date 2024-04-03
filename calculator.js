let calculation = localStorage.getItem('calculation') || '';

function updateCalculation (value) {
  calculation += value;
  displayCalculation();
  localStorage.setItem('calculation', calculation)
}

function displayCalculation () {
  document.querySelector('.js-display-calculation')
    .innerHTML = `${calculation}`;
}