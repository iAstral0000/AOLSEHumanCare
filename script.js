function validateForm() {
    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const phone = document.getElementById('phone').value;
    let message = '';

    if (name.trim() === '') {
        message += 'Name is required.\n';
    }
    if (location.trim() === '') {
        message += 'Location is required.\n';
    }
    if (phone.trim() === '') {
        message += 'Phone Number is required.\n';
    } else if (!/^\d+$/.test(phone)) {
        message += 'Phone Number must be numeric.\n';
    }

    if (message) {
        alert(message);
    } else {
        alert('Form submitted successfully!');
        window.location.href = 'main.html';
    }
}