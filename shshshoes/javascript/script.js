const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form');
    const emailInput = form.querySelector('input[type="text"]');
    const submitButton = form.querySelector('button');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Check if the email is valid
        if (isValidEmail(emailInput.value.trim())) {
            // Here you can perform any action you want, like sending the form data to a server
            alert("Form submitted successfully!");
            form.reset(); // Reset the form after submission
        } else {
            alert("Please enter a valid email address.");
        }
    });

    function isValidEmail(email) {
        // Basic email validation using regular expression
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});

function displayLoadTime() {
    var endTime = performance.now(); // Record the end time
    var loadTime = endTime - startTime; // Calculate the load time

    // Update the content of the loadTimeContainer div with the load time
    document.getElementById('loadTimeContainer').innerHTML = 'Page load time: ' + loadTime.toFixed(2) + ' milliseconds';
}

var startTime = performance.now(); // Record the start time when the script starts executing

// Event listener for when the entire page (including images and other resources) has finished loading
window.addEventListener('load', displayLoadTime);

