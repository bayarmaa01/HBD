// Add JavaScript functionality here
console.log("Script loaded!");

// Example console output
console.log("This is a console log message.");

// You can add more console logs as needed
const timestampElement = document.getElementById('timestamp');
const date = new Date();
const timestamp = date.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
timestampElement.textContent = timestamp.toUpperCase();
