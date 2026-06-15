// Scroll spy for navigation
const navLinks = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('.section[id]');

const setActive = (id) => {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${id}`;
    link.classList.toggle('is-active', isActive);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  },
  {
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0,
  }
);

sections.forEach((section) => observer.observe(section));

// Click handlers
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href').replace('#', '');
    setActive(id);
  });
});

// Mouse glow effect
document.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
  document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
});

// Set initial active
if (window.location.hash) {
  setActive(window.location.hash.replace('#', ''));
} else {
  setActive('about');
}