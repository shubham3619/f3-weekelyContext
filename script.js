const signupForm = document.getElementById('signup-form');
const signupMessage = document.getElementById('signup-message');

signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate that all fields are filled
    if (!fullName || !email || !password || !confirmPassword) {
        signupMessage.textContent = 'All fields are mandatory!';
        signupMessage.style.color = 'red';
        return; // Stop further processing
    }

    // Validate password and confirmation password match
    if (password !== confirmPassword) {
        signupMessage.textContent = 'Passwords do not match!';
        signupMessage.style.color = 'red';
        return; // Stop further processing
    }


    // Generate a random access token (for demonstration purposes)
    const accessToken = generateAccessToken();

    // Store user state in local storage
    const userState = {
        fullName,
        email,
        accessToken
    };
    localStorage.setItem('userState', JSON.stringify(userState));

    // Display success message and redirect to profile page
    signupMessage.textContent = 'Signup successful! Redirecting to profile...';
    signupMessage.style.color = 'green';
    setTimeout(() => {
        window.location.href = 'profile.html';
    }, 1500);
});

function generateAccessToken() {
    // Generate a random 16-byte string (for demonstration purposes)
    return Math.random().toString(36).substring(2, 18);
}
