document.getElementById('websiteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var websiteInput = document.getElementById('websiteInput').value;
    var result = isPhishing(websiteInput);
    displayResult(result);
});

function isPhishing(website) {
    // Logic to determine if the website is a phishing website
    // This is just a placeholder function, you would need to implement your own logic here
    // For example, you might use an API to check if the website is known for phishing activities
    return Math.random() < 0.5; // Placeholder logic, returns true or false randomly
}

function displayResult(result) {
    var popup = document.getElementById('popup');
    var resultElement = document.getElementById('result');
    resultElement.textContent = result ? 'This website is a phishing website' : 'This website is legitimate';
    popup.style.display = 'block';

    var closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
}
