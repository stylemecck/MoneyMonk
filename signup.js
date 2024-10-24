// JavaScript function to handle signup
function handleSignUp(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    var username = document.getElementById('txtUsername').value;
    var password = document.getElementById('txtPassword').value;
    var confirmPassword = document.getElementById('txtConfirmPassword').value;
    var messageLabel = document.getElementById('lblMessage');

    // Clear previous messages
    messageLabel.innerText = '';

    // Basic validation
    if (username === '' || password === '' || confirmPassword === '') {
        messageLabel.innerText = 'Please fill in all fields.';
        messageLabel.className = 'message error';
        return;
    }

    if (password !== confirmPassword) {
        messageLabel.innerText = 'Passwords do not match.';
        messageLabel.className = 'message error';
        return;
    }

    // Mock backend logic (for demonstration purposes)
    // You can replace this part with an actual API call
    if (username === 'testuser' && password === 'password123') {
        messageLabel.innerText = 'Sign up successful!';
        messageLabel.className = 'message success';
        // Redirect to login page after successful signup
        setTimeout(function() {
            window.location.href = 'login.html'; // Redirect to login page
        }, 1000);
    } else {
        messageLabel.innerText = 'Sign up failed. Try again.';
        messageLabel.className = 'message error';
    }
}