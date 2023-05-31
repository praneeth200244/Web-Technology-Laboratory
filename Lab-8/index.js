const button = document.querySelector("button");
const form = document.querySelector('#validateForm');

button.addEventListener('click', validateData);

function validateData() {
  const userID = form.elements[0].value;
  const uName = form.elements[1].value;
  const password = form.elements[2].value;
  const email = form.elements[3].value;
  
  // To check whether any input field is empty
  if (userID.trim() === '' || uName.trim() === '' || password.trim() === '' || email.trim() === '') {
    alert('Please fill in all the fields.');
    return;
  }
  
  // Validating User-ID
  if (userID.length < 5 || userID.length > 12) {
    alert('User ID must be between 5 and 12 characters in length.');
    return;
  }
  
  //Validating name (checks whether name contains only alphabets)
  if (!/^[A-Za-z]+$/.test(uName)) {
    alert('Name must contain only alphabets.');
    return;
  }

  // Validating name length
  if (uName.length < 15) {
    alert('Name must be at least 15 characters in length.');
    return;
  }
  
  // validating password
  if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(password)) {
    alert('Password must have 8 characters including at least one uppercase letter, one special character, and alphanumeric characters.');
    return;
  }
  
  //Validating email
  if (!isValidEmail(email)) {
    alert('Invalid email address.');
    return;
  }
  
  alert("All the fields are valid");
  
}

function isValidEmail(email) {
  // Regular expression pattern for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
