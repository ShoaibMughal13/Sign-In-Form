function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    const modal = document.getElementById('myModal');
    const closeBtn = document.getElementsByClassName('close-btn')[0];

    // Basic email validation using a regular expression
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    // Password validation: At least 8 characters
    if (!email.match(emailPattern)) {
        errorMessage.textContent = "Please enter a valid email address.";
        errorMessage.style.display = "block";
        return false;
    }

    // Check if password matches the criteria
    if (!password.match(passwordPattern)) {
        errorMessage.textContent = "Password must be at least 8 characters long, contain 1 uppercase letter and 1 special character.";
        errorMessage.style.display = "block";
        return false;
    }

    // If all validations pass
    errorMessage.style.display = "none";
    //successMessage.textContent = "Successfully signed in!";
    successMessage.style.display = "block"; // Show success message
    //errorMessage.style.display = "none"; // Hide error message
    modal.style.display = "block"; // Show the modal

    // Close the modal when the user clicks the 'x' button
    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    // Close the modal when the user clicks outside the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    return false; // Prevent form submission for now

   
}
