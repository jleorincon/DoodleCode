document.querySelector("form").addEventListener("submit", function(event) {
    const email = document.querySelector('input[type="email"]').value;
    const isEmailValid = email.includes('@') && email.includes('.');
    if (!isEmailValid) {
        alert("Please enter a valid email address.");
        event.preventDefault(); // Prevent form from submitting
    }
    // Additional validation checks can be added here
});
document.getElementById("showSignUp").addEventListener("click", function() {
    document.getElementById("signUpForm").style.display = "block";
    document.getElementById("signInForm").style.display = "none";
});

document.getElementById("showSignIn").addEventListener("click", function() {
    document.getElementById("signInForm").style.display = "block";
    document.getElementById("signUpForm").style.display = "none";
});
// Example AJAX request with jQuery for a sign-in form
$("#signInForm").submit(function(event) {
    event.preventDefault(); // Prevent default form submission
    $.ajax({
        type: "POST",
        url: "server_endpoint.php", // The server endpoint to process the login
        data: $(this).serialize(), // Serializes the form's elements.
        success: function(response) {
            // Handle success (e.g., redirect to dashboard)
        },
        error: function() {
            // Handle error (e.g., display an error message)
        }
    });
});
