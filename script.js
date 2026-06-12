// script.js
// Handles theme detection, toggle persistence, skip-link focus behavior, and contact form progressive enhancement.

(function(){
  const root = document.documentElement;
  const toggleButtons = Array.from(document.querySelectorAll('#theme-toggle, #theme-toggle-2, #theme-toggle-3, #theme-toggle-4'));

  function getSystemPreference(){
    if(window.matchMedia){
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  }

  function applyTheme(theme){
    if(theme === 'dark'){
      root.setAttribute('data-theme','dark');
    } else {
      root.removeAttribute('data-theme');
    }
    updateToggles(theme);
  }

  function updateToggles(theme){
    toggleButtons.forEach(btn=>{
      btn.setAttribute('aria-pressed', theme==='dark');
      const sun = btn.querySelector('.icon--sun');
      const moon = btn.querySelector('.icon--moon');
      if(sun) sun.classList.toggle('hidden', theme==='dark');
      if(moon) moon.classList.toggle('hidden', theme!=='dark');
    });
  }

  // initialize theme: preference from localStorage, then system, then default light
  const stored = localStorage.getItem('site-theme');
  const initial = stored || getSystemPreference() || 'light';
  applyTheme(initial);

  // toggle handler
  function toggleHandler(){
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'light' ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem('site-theme', next);
  }
  toggleButtons.forEach(btn=>btn.addEventListener('click', toggleHandler));

  // Skip-link: ensure it becomes visible when focused
  document.querySelectorAll('.skip-link').forEach(link=>{
    link.addEventListener('click', ()=>{
      const id = link.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el) el.setAttribute('tabindex','-1');
    });
  });

  // Contact form progressive enhancement: build mailto link and open mail client
  const form = document.getElementById('contact');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.elements['name'].value.trim();
      const email = form.elements['email'].value.trim();
      const message = form.elements['message'].value.trim();
      // basic validation
      if(!name || !email || !message){
        alert('Please fill all fields before sending.');
        return;
      }
      const subject = encodeURIComponent('Portfolio Inquiry from ' + name);
      const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
      const mailto = 'mailto:janedoe@example.com?subject=' + subject + '&body=' + body;
      // open mail client
      window.location.href = mailto;
    });
  }

})();
