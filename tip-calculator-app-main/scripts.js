const bill = document.querySelector("#bill");
const reset = document.querySelector(".btn-reset");
const button = document.querySelectorAll(".tip-btn");
const tipAmount = document.querySelector("#tip-final-amount");
const totalBill = document.querySelector("#total-bill");
const numberOfPeople = document.querySelector("#number-of-ppl");
const numberOfPeopleText = document.querySelector("#number-of-ppl__text");
const customAmount = document.querySelector("#custom-btn");

let percentage = 0;

if (bill.value.includes(",")) {
  bill.value.replace(",", ".");
}

numberOfPeople.addEventListener("input", () => {
  if (parseInt(numberOfPeople.value) == 0) {
    numberOfPeopleText.classList.add("active");
    numberOfPeople.classList.add("red-border");
  } else {
    numberOfPeopleText.classList.remove("active");
    numberOfPeople.classList.remove("red-border");
  }
});

button.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

function handleClick(event) {
  button.forEach((btn) => {
    btn.classList.remove("active-btn");
    if (event.target.innerHTML === btn.innerHTML) {
      btn.classList.add("active-btn");
    }
  });
}

let displayAmounts = () => {
  tipAmount.innerHTML = `$${percentage.toFixed(2)}`;
  totalBill.innerHTML = `$${(
    percentage +
    parseInt(bill.value) / numberOfPeople.value
  ).toFixed(2)}`;
};

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    percentage = parseFloat(
      (bill.value * (button[i].value / 100)) / numberOfPeople.value
    );
    displayAmounts();
  });
}

const resetCalc = () => {
  bill.value = 0;
  numberOfPeople.value = 0;
  numberOfPeopleText.classList.add("active");
  numberOfPeople.classList.add("red-border");
  tipAmount.innerHTML = `$0.00`;
  totalBill.innerHTML = `$0.00`;
  customAmount.value = 'CUSTOM';
};

reset.addEventListener("click", resetCalc);
