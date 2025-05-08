document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('lnameError').textContent = '';
    document.getElementById('messageError').textContent = '';
  
    // Get values
    const name = document.getElementById('fname').value.trim(); // fixed
    const lname = document.getElementById('lname').value.trim();
    const message = document.getElementById('message').value.trim();
  
    let hasError = false;
  
    if (name === '') {
      document.getElementById('nameError').textContent = 'Please enter your name';
      hasError = true;
    }
  
    if (lname === '') {
      document.getElementById('lnameError').textContent = 'Please enter your last name';
      hasError = true;
    }
  
    if (message === '') {
      document.getElementById('messageError').textContent = 'Please enter a message';
      hasError = true;
    }
  
    if (!hasError) {
      alert('Form submitted successfully!');
      this.reset();
    }
  });
  