// access all the elements
const fName = document.getElementById("firstName");
const lName = document.getElementById("lastName");
const email = document.getElementById("email");
const gRadio = document.getElementById("generalRadio");
const sRadio = document.getElementById("supportRadio");
const tArea = document.getElementById("textArea");
const cBox = document.getElementById("checkBox");
// access all error messages
const fNameError = document.getElementById("fName-error");
const lNameError = document.getElementById("lName-error");
const emailError = document.getElementById("email-error");
const generalError = document.getElementById("general-error");
const supportError = document.getElementById("support-error");
const tAreaError = document.getElementById("tArea-error");
const termError = document.getElementById("term-error");

// working on elements
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;
    // firstName validation
    if (!fName.value.trim()) {
      fNameError.textContent = "This field is required";
      isValid = false;
    } else {
      fNameError.textContent = "";
    }
    // lastName validation
    if (!lName.value.trim()) {
      lNameError.textContent = "This field is required";
      isValid = false;
    } else {
      lNameError.textContent = "";
    }
    // email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailPattern.test(email.value)) {
      emailError.textContent = "Please enter a valid email address";
      isValid = false;
    } else {
      emailError.textContent = "";
    }
    // query checking
    if (!gRadio.checked && !sRadio.checked) {
      generalError.textContent = "Please select a query type";
      supportError.textContent = "Please select a query type";
      isValid = false;
    } else {
      generalError.textContent = "";
      supportError.textContent = "";
    }
    // textArea validation
    if (!tArea.value.trim()) {
      tAreaError.textContent = "This field is required";
      isValid = false;
    } else {
      tAreaError.textContent = "";
    }
    // checkbox validation
    if (!cBox.checked) {
      termError.textContent =
        "To submit this form, please consent to being contacted";
      isValid = false;
    } else {
      termError.textContent = "";
    }
    // finall submission if all fields are valid
    if (isValid) {
      document.getElementById("success-message").classList.remove("hidden");
      document.getElementById("contact-form").reset();
    }
  });
