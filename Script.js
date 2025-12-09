// script.js - validim i thjeshtë për contact form
(function(){
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const feedback = document.getElementById('formFeedback');
  const resetBtn = document.getElementById('resetBtn');

  function validateEmail(email){
    // thjesht regex praktik
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showError(msg){
    feedback.style.color = 'crimson';
    feedback.textContent = msg;
  }

  function showSuccess(msg){
    feedback.style.color = 'green';
    feedback.textContent = msg;
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    feedback.textContent = '';
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if(name.length < 2){
      showError('Vendos një emër të vlefshëm (min 2 shkronja).');
      nameInput.focus();
      return;
    }
    if(!validateEmail(email)){
      showError('Vendos një email të vlefshëm.');
      emailInput.focus();
      return;
    }
    if(message.length < 10){
      showError('Mesazhi duhet të ketë të paktën 10 karaktere.');
      messageInput.focus();
      return;
    }

    // Nëse nuk ke backend, vetëm trego success dhe pastro formën
    showSuccess('Mesazhi u dërgua (shembull). Faleminderit!');
    form.reset();

    // Nëse dëshiron ta dërgosh në server, përdor fetch:
    // fetch('/api/contact', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({name,email,message})})
    //  .then(r => r.json()).then(...).catch(...);
  });

  resetBtn.addEventListener('click', function(){
    form.reset();
    feedback.textContent = '';
  });
})();