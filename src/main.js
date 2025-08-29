// Users should be able to:
//  - Complete the form and see a success toast message upon successful submission
//  - Receive form validation messages if:
//      - A required field has been missed
//      - The email address is not formatted correctly
//  - Complete the form only using their keyboard
//  - Have inputs, error messages, and the success message announced on their screen reader
//  - View the optimal layout for the interface depending on their device's screen size
// - See hover and focus states for all interactive elements on the page

const contactForm = document.querySelector("form");
const inputFields = document.getElementsByClassName("input-field");
const successMessage = document.querySelector("dialog");

let pattern = "[a-zA-Z0-9]+@[a-z]+.com";
let regexp = new RegExp(pattern);

// Radio buttons inputs collection:
let queryTypes = document.querySelectorAll("input[type='radio']");

contactForm.addEventListener("submit", submitForm);

function submitForm(event) {
  for (let inputField of inputFields) {
    // Check for errors on input[name="first-name"] and input[name="last-name"]:
    if (inputField.type === "text" && inputField.value == false) {
      let errorMessage = inputField.nextElementSibling;
      errorMessage.style.display = "block";
      event.preventDefault();
    }

    // Check for errors on input[type="email"]:
    if (
      inputField.type === "email" &&
      (inputField.value == false || regexp.test(inputField.value) === false)
    ) {
      let errorMessage = inputField.nextElementSibling;
      errorMessage.style.display = "block";
      event.preventDefault();
    }

    // Check for errors on input[type="radio"]:
    if (
      inputField.type === "radio" &&
      queryTypes[0].checked == false &&
      queryTypes[1].checked == false
    ) {
      let errorMessage = document.querySelector(".query-type > .error-message");
      errorMessage.style.display = "block";
      event.preventDefault();
    }

    // Check for errors in <textarea>:
    if (inputField.name === "message" && inputField.value == false) {
      let errorMessage = inputField.nextElementSibling;
      errorMessage.style.display = "block";
      event.preventDefault();
    }

    // Check for errors in input[type="checkbox"]:
    if (inputField.type === "checkbox" && inputField.checked == false) {
      let errorMessage = document.querySelector(".consent > .error-message");
      errorMessage.style.display = "block";
      event.preventDefault();
    }

    // All input fields are filled correctly:
    if (
      (inputField.type === "text" &&
      inputField.value == true) &&
      (inputField.type === "email" &&
      (inputField.value == true &&
      regexp.test(inputField.value) === true)) &&
      (inputField.type === "radio" &&
      (queryTypes[0].checked == true || queryTypes[1].checked == true)) &&
      (inputField.name === "message" &&
      inputField.value == true) &&
      (inputField.type === "checkbox" &&
      inputField.checked == true)
    ) {
      contactForm.submit();
			successMessage.showModal();
    }	
  }
}
