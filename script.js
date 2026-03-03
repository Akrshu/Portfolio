// Theme toggle
const themeBtn = document.getElementById("themeBtn");
const icon = themeBtn.querySelector(".icon");

function applyTheme(theme) {
  if (theme === "light") {
    document.body.classList.add("light");
    icon.textContent = "☀";
  } else {
    document.body.classList.remove("light");
    icon.textContent = "☾";
  }
  localStorage.setItem("theme", theme);
}

applyTheme(localStorage.getItem("theme") || "dark");

themeBtn.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light");
  applyTheme(isLight ? "dark" : "light");
});

// Reveal on scroll
const els = document.querySelectorAll(".reveal");
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  },
  { threshold: 0.12 }
);

els.forEach((el) => obs.observe(el));