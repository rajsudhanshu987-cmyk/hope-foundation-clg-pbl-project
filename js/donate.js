var donationForm = document.getElementById("donationForm");
var customAmount = document.getElementById("custom");
var customOption = document.getElementById("custom-option");
var total = document.getElementById("total");
var donationMessage = document.getElementById("donateMsg");

function getAmount() {
  var selectedOption = document.querySelector('input[name="amount"]:checked');

  if (!selectedOption) {
    return 0;
  }

  if (selectedOption.value === "custom") {
    return customAmount.value === "" ? 0 : customAmount.valueAsNumber;
  }

  return Number(selectedOption.value);
}

function updateTotal() {
  total.textContent = "₹" + getAmount();
  donationMessage.textContent = "";
  donationMessage.className = "msg";
}

donationForm.addEventListener("change", function (event) {
  if (event.target.name === "amount") {
    if (!customOption.checked) {
      customAmount.value = "";
    }

    updateTotal();
  }
});

customAmount.addEventListener("input", function () {
  customOption.checked = true;
  updateTotal();
});

donationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var amount = getAmount();
  var selectedOption = document.querySelector('input[name="amount"]:checked');

  if (
    !donationForm.checkValidity() ||
    (selectedOption.value === "custom" && customAmount.value === "") ||
    !isFinite(amount) ||
    amount <= 0
  ) {
    donationMessage.textContent = "Please select or enter an amount.";

    if (selectedOption && selectedOption.value === "custom") {
      if (customAmount.value === "") {
        donationMessage.textContent = "Please enter a custom donation amount.";
      } else {
        donationMessage.textContent = "Please enter an amount greater than ₹0.";
      }
    }

    if (customAmount.validity.rangeUnderflow) {
      donationMessage.textContent = "Please enter an amount greater than ₹0.";
    }

    donationMessage.className = "msg err";
    return;
  }

  donationMessage.textContent =
    "Thank you for donating ₹" + amount + "! 💛";
  donationMessage.className = "msg ok";
});
