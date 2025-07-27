// Smooth scrolling for nav links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Project details toggle
function toggleDetails(id) {
  const el = document.getElementById(id);
  el.style.display = (el.style.display === 'none') ? 'block' : 'none';
} 