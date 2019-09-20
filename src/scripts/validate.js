const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
// Form
const form = document.getElementById('myForm');
// Validation colors
const green = '#4CAF50';
const red = '#F44336';

// Handle form
form.addEventListener('submit', function(event) {
  // Prevent default behaviour
  event.preventDefault();
  if (
      validateFirstName() &&
      validateLastName() &&
      validatePassword() &&
      validatePhone() &&
      validateEmail()
  ) {
    const name = firstName.value;
    const container = document.querySelector('div.container');
    const loader = document.createElement('div');
    loader.className = 'progress';
    const loadingBar = document.createElement('div');
    loadingBar.className = 'indeterminate';
    loader.appendChild(loadingBar);
    container.appendChild(loader);
    setTimeout(function() {
      const loaderDiv = document.querySelector('div.progress');
      const panel = document.createElement('div');
      panel.className = 'card-panel green';
      const text = document.createElement('span');
      text.className = 'white-text';
      text.appendChild(
          document.createTextNode(
              `Sign up successful, welcom to ratiose ${name}`
          )
      );
      panel.appendChild(text);
      container.replaceChild(panel, loaderDiv);
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 2000)
    }, 1000);
  }
});

// Validators
function validateFirstName() {
  // check if is empty
  if (checkIfEmpty(firstName)) return;
  // is if it has only letters
  if (!checkIfOnlyLetters(firstName)) return;
  return true;
}
function validateLastName() {
  // check if is empty
  if (checkIfEmpty(lastName)) return;
  // is if it has only letters
  if (!checkIfOnlyLetters(lastName)) return;
  return true;
}
function validatePassword() {
  if (checkIfEmpty(password)) return;
  if (!containsCharacters(password, 4)) return;

  return true;
}

function validateEmail() {
  if (checkIfEmpty(email)) return;
  if (!containsCharacters(email, 3)) return;
  return true;
}

function validatePhone() {
  if (!containsCharacters(phone, 5)) return;
  return true;
}
// Utility functions
function checkIfEmpty(field) {
  if (isEmpty(field.value.trim())) {
    // set field invalid
    setInvalid(field, `${field.name} must not be empty`);
    return true;
  } else {
    // set field valid
    setValid(field);
    return false;
  }
}
function isEmpty(value) {
  if (value === '') return true;
  return false;
}
function setInvalid(field, message) {
  field.className = 'invalid';
  field.nextElementSibling.innerHTML = message;
  field.nextElementSibling.style.color = red;
}
function setValid(field) {
  field.className = 'valid';
  field.nextElementSibling.innerHTML = '';
}
function checkIfOnlyLetters(field) {
  if (/^[a-z ]+$/.test(field.value)) {
    setValid(field);
    return true;
  }
  else {
    setInvalid(field, `${field.name} must contain only letters`);
    return false;
  }
}
function meetLength(field, minLength, maxLength) {
  if (field.value.length >= minLength && field.value.length < maxLength) {
    setValid(field);
    return true;
  } else if (field.value.length < minLength) {
    setInvalid(
        field,
        `${field.name} must be at least ${minLength} characters long`
    );
    return false;
  } else {
    setInvalid(
        field,
        `${field.name} must be shorter than ${maxLength} characters`
    );
    return false;
  }
}
function containsCharacters(field, code) {
  let regEx;
  switch (code) {
    case 1:
      // letters
      regEx = /(?=.*[a-zA-Z])/;
      return matchWithRegEx(regEx, field, 'Must contain at least one letter');

    case 3:
      // Email pattern
      regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return matchWithRegEx(regEx, field, 'Must be a valid email address');
    case 4:
      // special char
      regEx = /^(?=.{8,}$)(?=.*[0-9a-zA-Z])(?=.*\W).*$/;
      return matchWithRegEx(regEx, field, 'Must be at least 8 long and contain at least 1 special character');
    case 5:
      // phone
      regEx = /^[0-9\s]*$/;
      return matchWithRegEx(regEx, field, 'Must be insert only numbers');
    default:
      return false;
  }
}
function matchWithRegEx(regEx, field, message) {
  if (field.value.match(regEx)) {
    setValid(field);
    return true;
  } else {
    setInvalid(field, message);
    return false;
  }
}
function onlyText(){
  if (/[0-9]/i
      .test(String.fromCharCode(event.keyCode || event.charCode)))
    event.preventDefault();
}
const input = document.querySelectorAll('input[type="text"]');
for(let i = 0; i < input.length; i++) {
  input[i].addEventListener("input", function(e){
    e.target.value = e.target.value.toLowerCase();
  });
}
function isNumberKey(evt){
  let charCode = (evt.which) ? evt.which : event.keyCode;
  if (charCode > 32 && (charCode < 48 || charCode > 57))
    return false;
  return true;
}

