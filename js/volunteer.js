document.getElementById("form").onsubmit = function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var area = document.getElementById("area").value;
  var message = document.getElementById("formMsg");
  var error = "";

  if (name.length < 3) {
    error = "Please enter your full name.";
  } else if (email.indexOf("@") < 1 || email.indexOf(".") < 0) {
    error = "Please enter a valid email.";
  } else if (!/^[0-9]{10}$/.test(phone)) {
    error = "Phone number must be 10 digits.";
  } else if (area === "") {
    error = "Please choose an area.";
  }

  if (error !== "") {
    message.textContent = error;
    message.className = "msg err";
  } else {
    message.textContent =
      "Thank you, " + name + "! We will contact you soon. 🎉";
    message.className = "msg ok";
    document.getElementById("form").reset();
  }
};
