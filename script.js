const form = document.getElementById("signup-form");

function onSubmitForm(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  sessionStorage.setItem("name", name);
  sessionStorage.setItem("email", email);
  sessionStorage.setItem("password", password);

  alert("Sign up successful!");
}

form.addEventListener("submit", onSubmitForm);
