const navLinks = Array.from(document.querySelectorAll('.sidebar__nav a'));
const sectionLinks = navLinks.filter((link) => link.getAttribute('href')?.startsWith('#'));
const sections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);
const sectionVisibility = new Map();

const setActiveLink = (hash) => {
  sectionLinks.forEach((link) => {
    link.classList.toggle('is-active', link.getAttribute('href') === hash);
  });
};

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

sectionLinks.forEach((link) => {
  link.addEventListener('click', () => {
    setActiveLink(link.getAttribute('href'));
  });
});

setActiveLink(window.location.hash || '#about');