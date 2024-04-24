// Function to change the background color of the sections after 5 seconds
function changeSectionBackground() {
    var aboutHead = document.getElementById('about-head');
    var shoeStore = document.getElementById('shoe-store');
    if (aboutHead) {
       aboutHead.style.backgroundColor = '#f0f0f0'; // Change the background color of about-head
    }
    if (shoeStore) {
       shoeStore.style.backgroundColor = '#f0f0f0'; // Change the background color of shoe-store
    }
 }

 // Start the timer when the page loads
 window.onload = function() {
    setTimeout(changeSectionBackground, 5000); // Change background color after 5 seconds
 };