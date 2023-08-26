document.addEventListener('DOMContentLoaded', () => {
    const userState = JSON.parse(localStorage.getItem('userState'));

    if (userState && userState.accessToken) {
        const userDetailsDiv = document.getElementById('user-details');
        userDetailsDiv.innerHTML = `
        <p><strong>Full Name:</strong> ${userState.fullName}</p>
        <p><strong>Email:</strong> ${userState.email}</p>
        <p><strong>Access Token:</strong> ${userState.accessToken}</p>
    `;
    } else {
        // Redirect to signup page if no access token
        window.location.href = 'index.html';
    }

    const logoutButton = document.getElementById('logout-button');
    logoutButton.addEventListener('click', () => {
        // Clear user state and redirect to signup page
        localStorage.removeItem('userState');
        window.location.href = 'index.html';
    });
});
