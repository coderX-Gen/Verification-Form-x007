// JavaScript for form validation

// Name validation
function validateName() {
    const fullName = document.getElementById("fullName").value.trim();
    const nameError = document.getElementById("nameError");

    if (fullName.length < 5) {
        nameError.innerText = "Name must be at least 5 characters.";
        return false;
    }
    nameError.innerText = "";
    return true;
}

// Email validation
function validateEmail() {
    const email = document.getElementById("email").value.trim();
    const emailError = document.getElementById("emailError");

    if (!email.includes("@")) {
        emailError.innerText = "Enter a valid email address.";
        return false;
    }
    emailError.innerText = "";
    return true;
}

// Phone validation
function validatePhone() {
    const phone = document.getElementById("phone").value.trim();
    const phoneError = document.getElementById("phoneError");

    if (phone === "123456789" || phone.length !== 10 || isNaN(phone)) {
        phoneError.innerText = "Enter a valid 10-digit phone number.";
        return false;
    }
    phoneError.innerText = "";
    return true;
}

// Password validation
function validatePassword() {
    const fullName = document.getElementById("fullName").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();
    const passwordError = document.getElementById("passwordError");

    if (
        password.toLowerCase() === "password" ||
        password.toLowerCase() === fullName ||
        password.length < 8
    ) {
        passwordError.innerText =
            "Password must be at least 8 characters and cannot be 'password' or your name.";
        return false;
    }
    passwordError.innerText = "";
    return true;
}

// Confirm password validation
function validateConfirmPassword() {
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    if (password !== confirmPassword) {
        confirmPasswordError.innerText = "Passwords do not match.";
        return false;
    }
    confirmPasswordError.innerText = "";
    return true;
}

// Form submission
function handleSubmit(event) {
    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
        alert("Form submitted successfully!");
        document.getElementById("registrationForm").reset();
    } else {
        alert("Please fix the errors before submitting.");
    }
}