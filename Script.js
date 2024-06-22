document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    if (!name || !location || !phoneNumber) {
        alert('All fields are required');
        return;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneNumber)) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }

    // Store login flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    // Redirect to home page
    window.location.href = 'homepage.html';
});
