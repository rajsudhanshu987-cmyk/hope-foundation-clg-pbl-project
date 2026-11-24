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

