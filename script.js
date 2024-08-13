document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("bg-white");
      document.body.classList.toggle("text-black");
      document.body.classList.toggle("bg-dark-900");
      document.body.classList.toggle("text-white");
    });
  }
});
