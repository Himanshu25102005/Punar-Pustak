
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    
    if (email && isValidEmail(email)) {
      alert('Thank you for subscribing to our newsletter!');
      emailInput.value = '';
    } else {
      alert('Please enter a valid email address.');
    }
  });
}

