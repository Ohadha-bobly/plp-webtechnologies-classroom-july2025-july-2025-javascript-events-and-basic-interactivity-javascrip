// Part 1: Event Handling

document.getElementById("messageBtn").addEventListener("click", function () {
  document.getElementById("messageArea").textContent =
    "You clicked the button!";
});

// Part 2a:  Mode Toggle

document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Part 2b: Counter Game

let counter = 0;
document.getElementById("counterBtn").addEventListener("click", function () {
  counter++;
  document.getElementById("counterValue").textContent = counter;
});

// Part 3: Form Validation

document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 
    let valid = true;

    // Name validation

    let name = document.getElementById("name").value.trim();
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      valid = false;
    } else {
      document.getElementById("nameError").textContent = "";
    }

    // Email validation (basic pattern)

    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      document.getElementById("emailError").textContent =
        "Enter a valid email.";
      valid = false;
    } else {
      document.getElementById("emailError").textContent = "";
    }

    // Password validation (at least 6 characters)

    let password = document.getElementById("password").value.trim();
    if (password.length < 6) {
      document.getElementById("passwordError").textContent =
        "Password must be at least 6 characters.";
      valid = false;
    } else {
      document.getElementById("passwordError").textContent = "";
    }

    // Result message
    if (valid) {
      document.getElementById("formMessage").textContent =
        "Form submitted successfully!";
    } else {
      document.getElementById("formMessage").textContent =
        "Please fix the errors above.";
    }
  });
