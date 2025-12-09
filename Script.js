// script.js - simple validation for contact form
(function() {
  // Get form elements
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  const feedback = document.getElementById('formFeedback');
  const resetBtn = document.getElementById('resetBtn');

  if (!form) return; // exit if form not found

  // Simple email validation
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Show error message
  function showError(msg) {
    if (feedback) {
      feedback.style.color = 'crimson';
      feedback.textContent = msg;
    }
  }

  // Show success message
  function showSuccess(msg) {
    if (feedback) {
      feedback.style.color = 'green';
      feedback.textContent = msg;
    }
  }

  // Form submit
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (feedback) feedback.textContent = '';

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    // Validation
    if (name.length < 2) {
      showError('Please enter a valid name (min 2 characters).');
      nameInput.focus();
      return;
    }

    if (!validateEmail(email)) {
      showError('Please enter a valid email.');
      emailInput.focus();
      return;
    }

    if (subject.length < 2) {
      showError('Subject must be at least 2 characters.');
      subjectInput.focus();
      return;
    }

    if (message.length < 10) {
      showError('Message must be at least 10 characters.');
      messageInput.focus();
      return;
    }

    // Success
    showSuccess('Message sent successfully! Thank you.');
    form.reset();
  });

  // Reset button
  if (resetBtn) {
    resetBtn.addEventListener('click', function() {
      form.reset();
      if (feedback) feedback.textContent = '';
    });
  }

})();
