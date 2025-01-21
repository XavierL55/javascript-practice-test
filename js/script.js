
const inputFields = document.querySelectorAll('input');
const submitButton = document.querySelector('#submitButton');
const counter = document.querySelector('p');

let count = getCookie('formSubmitted');

if (count) {
  counter.textContent = `The form has been submitted ${count} times`;
}

if (count === undefined) {
    count = 0;
  }

inputFields.forEach((field) => {
  field.addEventListener('focus', () => {
    field.style.background = 'yellow';
  });

  field.addEventListener('blur', () => {
    field.style.background = 'white';
    validateField(field);
  });
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (validateForm()) {
    submitForm();
  }
});

function validateField(field) {
  if (field.name === 'username' || field.name === 'fullname' || field.name === 'email' || field.name === 'age') {
    if (field.value.trim() === '') {
      field.style.background = 'red';
    } else {
      field.style.background = 'white';
    }
  }
}

function validateForm() {
  let valid = true;
  inputFields.forEach((field) => {
    if (field.name === 'username' || field.name === 'fullname' || field.name === 'email' || field.name === 'age') {
      if (field.value() === '') {
        field.style.background = 'red';
        valid = false;
      }
    }
    if (field.name === 'consent' && !field.checked) {
      valid = false;
    }
  });
  return valid;
}

function submitForm() {
  count++;
  setCookie('formSubmitted', count);
  counter.textContent = `The form has been submitted ${count} times`;
  submitButton.style.background = 'green';
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(name, value) {
  document.cookie = `${name}=${value}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}