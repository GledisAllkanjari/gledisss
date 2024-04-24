// Function to automatically scroll to a specific section after 5 seconds
function scrollToSection() {
    var sectionId = 'form-details'; // Change this to the ID of the section you want to scroll to
    var section = document.getElementById(sectionId);
    if (section) {
       section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
 }

 // Start the timer when the page loads
 window.onload = function() {
    setTimeout(scrollToSection, 5000); // Scroll to section after 5 seconds
 };

 document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var subject = document.getElementById('subject').value.trim();
    var message = document.getElementById('message').value.trim();
    var formMessage = document.getElementById('formMessage');
    
    if (name === '' || email === '' || subject === '' || message === '') {
       formMessage.textContent = 'Please fill out all fields.';
       return;
    }
    
    if (!validateEmail(email)) {
       formMessage.textContent = 'Please enter a valid email address.';
       return;
    }
    
    if (subject.length === 0) {
       formMessage.textContent = 'Please enter a subject.';
       return;
    }
    
    if (message.length > 300) {
       formMessage.textContent = 'Message exceeds 300 characters.';
       return;
    }
    
    // Form is valid, submit it or show success message
    formMessage.textContent = 'The email was sent successfully';
 });
 
 function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
 }