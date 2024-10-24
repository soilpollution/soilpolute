document.getElementById('learn-more-btn').addEventListener('click', function() {
    alert('Soil pollution is a serious environmental issue that affects food security, human health, and ecosystems.');
});

document.getElementById('show-impact').addEventListener('click', function() {
    const impactDetails = document.getElementById('impact-details');
    if (impactDetails.style.display === 'none') {
        impactDetails.style.display = 'block';
    } else {
        impactDetails.style.display = 'none';
    }
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    document.getElementById('form-response').innerText = `Thank you, ${name}, for your message! We'll get back to you at ${email}.`;
});