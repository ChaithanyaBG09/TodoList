function showError(elementId, message) {
  const element = document.getElementById(elementId);
  element.innerText = message;
  if (message) {
    setTimeout(() => {
      element.innerText = '';
    }, 5000);
  }
}

function isValidPhoneNumber(number) {
  return /^[0-9]{10}$/.test(number);
}

function isValidPassword(password) {
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  return hasUpper && hasLower && hasDigit && hasSpecial && password.length >= 8 && password.length <= 12;
}

function handleLogin() {
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();
  let valid = true;

  // Phone validation
  if (phone === "") {
    showError("phoneError", "Phone number is required.");
    valid = false;
  } else if (!isValidPhoneNumber(phone)) {
    showError("phoneError", "Enter 10 digit number only.");
    valid = false;
  } else {
    showError("phoneError", "");
  }

  // Password validation
  if (password === "") {
    showError("passwordError", "Password is required.");
    valid = false;
  } else if (!isValidPassword(password)) {
    showError("passwordError", "Use 8,A,a,& (uppercase, lowercase, number, special character)");
    valid = false;
  } else {
    showError("passwordError", "");
  }

  // Navigate on success
  if (valid) {
    window.location.href = "todo.html";
  }
}

// Restrict number input to digits only
document.getElementById("phone").addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, '');
});

// Eye toggle for password visibility
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  togglePassword.classList.toggle("fa-eye");
  togglePassword.classList.toggle("fa-eye-slash");
});
