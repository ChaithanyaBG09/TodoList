document.getElementById("phoneNumber").addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
  if (this.value.length > 10) {
    this.value = this.value.slice(0, 10);
  }
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const phone = document.getElementById("phoneNumber").value.trim();
  const code = document.getElementById("countryCode").value;
  const pass = document.getElementById("password").value.trim();

  if (!phone || !code || !pass) {
    alert("Please fill in all fields.");
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    alert("Phone number must be exactly 10 digits.");
    return;
  }

  // Password checks
  const errors = [];
  if (pass.length < 8 || pass.length > 12) {
    errors.push("Password must be 8–12 characters long.");
  }
  if (!/[A-Z]/.test(pass)) {
    errors.push("Include at least one uppercase letter.");
  }
  if (!/[a-z]/.test(pass)) {
    errors.push("Include at least one lowercase letter.");
  }
  if (!/\d/.test(pass)) {
    errors.push("Include at least one number.");
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
    errors.push("Include at least one special character.");
  }

  if (errors.length > 0) {
    alert("Password Error:\n" + errors.join("\n"));
    return;
  }

  // All checks passed — navigate
  window.location.href = "todo.html";
});


