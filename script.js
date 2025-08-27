// Typing effect for name
const nameText = "Syed Ahmed W";
let i = 0;
function typeWriter() {
  if (i < nameText.length) {
    document.getElementById("typing-name").innerHTML += nameText.charAt(i);
    i++;
    setTimeout(typeWriter, 150);
  }
}
typeWriter();

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "🌙 Dark Mode"
    : "☀️ Light Mode";
});

// Smooth scroll for nav
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

  const form = document.getElementById("contact-form");
  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // Stop normal redirect
    const status = document.getElementById("form-status");
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mqalgnvw", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      status.textContent = "✅ Thank you! Your message has been sent.";
      form.reset();
    } else {
      status.textContent = "❌ Oops! Something went wrong. Please try again.";
    }
  });

