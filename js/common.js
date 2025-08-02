// Common JavaScript functionality for all pages

document.addEventListener('DOMContentLoaded', () => {
    // Common navigation functionality
    setupNavigation();
});

function setupNavigation() {
    // Add any common navigation functionality here
    // For now, this is a placeholder for future common features
    console.log('Common navigation setup completed');
}

// Common utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function formatTime(timeString) {
    // Simple time formatting utility
    return timeString;
}