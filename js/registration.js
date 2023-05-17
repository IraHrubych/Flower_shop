(function() {
  const formElement = document.querySelector('form#form');

  formElement.addEventListener('submit', e => {
    e.preventDefault();
  });

  const fullnameInput = document.querySelector('input#fullname');
  const birthdayInput = document.querySelector('input#birthday');
  const emailInput = document.querySelector('input#email');
  const siteInput = document.querySelector('input#site');
  const passwordInput = document.querySelector('input#password');
  const clearInput = document.querySelector('input#clear');
  const submitInput = document.querySelector('input#submit');
  const maleInput = document.querySelector('input#male');
  const femaleInput = document.querySelector('input#female');
  const newsInput = document.querySelector('input#news');
  const hornsInput = document.querySelector('input#horns');

  const validate = (input, pattern = '') => {
    const value = input && input.value.trim();
    const re = new RegExp(pattern);
    const valid = value && re.test(value);

    if (!valid) {
      input.style.borderColor = 'red';
    } else {
      input.style.borderColor = 'white';
    }
  };

  const reset = (input, value = '') => {
    if (!input) {
      return;
    }

    if (input.type === 'radio' || input.type === 'checkbox') {
      input.checked = false;
    } else {
      input.value = value;
    }

    input.style.borderColor = 'white';
  };

  clearInput.addEventListener('click', () => {
    reset(fullnameInput);
    reset(birthdayInput);
    reset(emailInput);
    reset(siteInput, 'http://');
    reset(passwordInput);
    reset(maleInput);
    reset(femaleInput);
    reset(newsInput);
    reset(hornsInput);
  });

  submitInput.addEventListener('click', () => {
    validate(fullnameInput);
    validate(birthdayInput);
    validate(emailInput, /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]+$/g);
    validate(passwordInput);
  });
})();
