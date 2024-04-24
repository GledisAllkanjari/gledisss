function clearForm() {
    document.getElementById("registrationForm").reset();
}

// Function to handle form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const telephone = document.getElementById("telephone").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

    // Check if passwords match
    if (password !== confirmPassword) {
        document.getElementById("errorMessage").innerHTML = "Passwords do not match!";
        return;
    }

    // Check if gender is selected
    if (!gender) {
        document.getElementById('errorMessage').textContent = 'Please select your gender.';
        return;
    }

    // If all validations pass, submit the form
    // Redirect to index.html
    window.location.href = "index.html";
});

// Function to handle clear button click
document.getElementById("clearButton").addEventListener("click", function() {
    clearForm();
});

// JavaScript for drag and drop functionality
var dropZone = document.getElementById('drop_zone');
var fileList = document.getElementById('file_list');

dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('dragleave', handleDragLeave, false);
dropZone.addEventListener('drop', handleFileSelect, false);

function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files;
    if (evt.dataTransfer) {
        files = evt.dataTransfer.files; // Dropped files
    } else {
        files = evt.target.files; // Files selected via input field
    }

    // Clear previous entries
    fileList.innerHTML = '';

    // files is a FileList of File objects. List some properties.
    for (var i = 0, f; f = files[i]; i++) {
        console.log(f.name);
        // Optionally, you could upload each file here
        
        // Display file name
        var listItem = document.createElement('div');
        listItem.textContent = f.name;
        fileList.appendChild(listItem);
    }
}

function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
    this.classList.add('over');
}

function handleDragLeave(evt) {
    this.classList.remove('over');
}
var startTime;

    function startLoadTimer() {
        startTime = performance.now();
    }

    window.onload = function() {
        var form = document.getElementById('registrationForm');
        form.addEventListener('submit', function() {
            var endTime = performance.now();
            var loadTime = (endTime - startTime) ; 
            document.getElementById('loadTime').textContent = loadTime.toFixed(2);
            document.getElementById('loadTimer').style.display = 'block';
        });
    };