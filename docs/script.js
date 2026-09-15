// Révèle chaque élément .reveal une seule fois quand il entre dans le
// viewport, quel que soit le sens du scroll (roulette souris, trackpad...).
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // une seule apparition
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: "0px 0px -8% 0px",
  }
);

reveals.forEach((el) => observer.observe(el));
