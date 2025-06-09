const toggle = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    icon.textContent = "🌙";
  } else {
    icon.textContent = "☀️";
  }
});

