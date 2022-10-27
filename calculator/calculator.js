window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const defVal = {amount: 1000, years: 1, rate: 2};
  const amount = document.getElementById("loan-amount");
  const years = document.getElementById("loan-years");
  const rate = document.getElementById("loan-rate");
  amount.value = defVal.amount;
  years.value = defVal.years;
  rate.value = defVal.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const i = (values.rate/100)/12;
  const p = values.amount;
  const n = values.years*12;
  return ((p * i)/(1-Math.pow((1+i),-n))).toFixed(2);
  
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText = `$ ${monthly}`;
}
