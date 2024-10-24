 // JavaScript function to handle login
 function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    var username = document.getElementById('txtUsername').value;
    var password = document.getElementById('txtPassword').value;
    var messageLabel = document.getElementById('lblMessage');

    // Clear previous messages
    messageLabel.innerText = '';

    // Basic login validation
    if (username === '' || password === '') {
        messageLabel.innerText = 'Please enter both username and password.';
        messageLabel.className = 'message error';
        return;
    }

    // Mock backend logic (for demonstration purposes)
    if (username === 'admin' && password === 'password123') {
        messageLabel.innerText = 'Login successful!';
        messageLabel.className = 'message success';
        // Redirect to another page after successful login
        setTimeout(function() {
            window.location.href = 'index.html'; // Redirect to homepage
        }, 1000);
    } else {
        messageLabel.innerText = 'Invalid username or password.';
        messageLabel.className = 'message error';
    }
}