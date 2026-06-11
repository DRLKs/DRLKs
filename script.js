const navLinks = Array.from(document.querySelectorAll('.sidebar__nav a'));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);
const revealItems = document.querySelectorAll('[data-reveal]');
const sectionVisibility = new Map();

const setActiveLink = (hash) => {
  navLinks.forEach((link) => {
    link.classList.toggle('is-active', link.getAttribute('href') === hash);
  });
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: '0px 0px -8% 0px',
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      sectionVisibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
    });

    const [activeSection] = [...sectionVisibility.entries()]
      .sort((left, right) => right[1] - left[1])
      .filter(([, ratio]) => ratio > 0);

    if (activeSection) {
      setActiveLink(`#${activeSection[0]}`);
    }
  },
  {
    threshold: 0.35,
    rootMargin: '-10% 0px -40% 0px',
  }
);

sections.forEach((section) => sectionObserver.observe(section));

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    setActiveLink(link.getAttribute('href'));
  });
});