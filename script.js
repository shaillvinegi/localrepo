console.log("🚀 AI Placement Assistant initialized!");

// Get Started Button - Redirect to Login
document.getElementById('getStarted')?.addEventListener('click', function() {
    console.log("Get Started clicked!");
    // For now, alert - later change to actual redirect
    alert('Taking you to login page...');
    window.location.href = 'pages/login.html';
});

// Example: Add current year to footer
const yearSpan = document.createElement('span');
yearSpan.textContent = new Date().getFullYear();
document.querySelector('footer p').appendChild(yearSpan);