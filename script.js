document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Check local storage for theme preference
  if (localStorage.getItem("theme") === "light") {
    body.classList.remove("bg-dark-900", "text-white");
    body.classList.add("bg-white", "text-black");
    themeToggle.textContent = "Dark Mode";
  }

  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("bg-dark-900")) {
      body.classList.remove("bg-dark-900", "text-white");
      body.classList.add("bg-white", "text-black");
      themeToggle.textContent = "Dark Mode";
      localStorage.setItem("theme", "light");
    } else {
      body.classList.remove("bg-white", "text-black");
      body.classList.add("bg-dark-900", "text-white");
      themeToggle.textContent = "Light Mode";
      localStorage.setItem("theme", "dark");
    }
  });
});
