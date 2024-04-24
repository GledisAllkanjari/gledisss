// Function to automatically scroll to a specific section after 5 seconds
function scrollToSection() {
    var sectionId = 'puma'; // Change this to the ID of the section you want to scroll to
    var section = document.getElementById(sectionId);
    if (section) {
       section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
 }

 // Start the timer when the page loads
 window.onload = function() {
    setTimeout(scrollToSection, 5000); // Scroll to section after 5 seconds
 };