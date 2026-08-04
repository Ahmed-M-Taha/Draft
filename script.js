// Mobile nav (simple show/hide of a stacked menu)
const navToggle = document.getElementById('navToggle');
const navLinksList = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  const isOpen = navLinksList.style.display === 'flex';
  if (isOpen) {
    navLinksList.style.display = '';
    navLinksList.style.flexDirection = '';
    navLinksList.style.position = '';
  } else {
    navLinksList.style.display = 'flex';
    navLinksList.style.flexDirection = 'column';
    navLinksList.style.position = 'absolute';
    navLinksList.style.top = '64px';
    navLinksList.style.left = '0';
    navLinksList.style.right = '0';
    navLinksList.style.background = 'var(--paper)';
    navLinksList.style.padding = '20px 32px';
    navLinksList.style.borderBottom = '1px solid var(--hair)';
    navLinksList.style.gap = '18px';
  }
});

// Hero blueprint/built toggle
const heroPanel = document.getElementById('heroPanel');
const btnBlueprint = document.getElementById('btnBlueprint');
const btnBuilt = document.getElementById('btnBuilt');

function setState(built){
  heroPanel.classList.toggle('built', built);
  btnBlueprint.classList.toggle('active', !built);
  btnBuilt.classList.toggle('active', built);
}
btnBlueprint.addEventListener('click', () => setState(false));
btnBuilt.addEventListener('click', () => setState(true));

// Auto-resolve blueprint into "built" shortly after the draw-in animation finishes
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReduced) {
  setTimeout(() => setState(true), 2000);
} else {
  setState(true);
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));
