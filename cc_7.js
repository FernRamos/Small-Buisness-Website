/* ---------- Helpers ---------- */
const $ = selector => document.querySelector(selector);

/* ---------- 1. Dynamic footer year ---------- */
$("#year").textContent = new Date().getFullYear();

/* ---------- 2. CTA button: “Thanks for reaching out!” ---------- */
$("#cta-btn").addEventListener("click", () => {
  $("#hero-title").textContent       = "Thanks for reaching out!";
  $("#hero-description").textContent = "We’ll get back to you within one business day.";
  $("#cta-btn").textContent          = "Message Sent!";
  $("#cta-btn").disabled             = true;
});

/* ---------- 3. **Extra** light / dark mode toggle ---------- */
(function addThemeToggle() {
  const toggle = document.createElement("button");
  toggle.textContent = "🌙 Dark Mode";
  toggle.className   = "btn-primary";
  toggle.style.marginLeft = "1rem";
  $("header .flex-between").appendChild(toggle);

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });
})();

/* ---------- 4. Step 5: update hero headline via form ---------- */
// Grab the elements
const form          = document.getElementById("cta-form");       // <form>
const headlineInput = document.getElementById("headline-input"); // <input>
const heroHeadline  = document.getElementById("hero-title");     // <h2>

// Replace <h2> text on submit (works for Enter key & button click)
form.addEventListener("submit", event => {
  event.preventDefault();                       // prevent page reload
  const text = headlineInput.value.trim();
  if (text) {
    heroHeadline.textContent = text;            // update headline
    headlineInput.value = "";                   // clear field
  }
});
// === Mobile Nav Toggle ===
const toggleBtn = document.getElementById("menu-toggle");
const navList = document.querySelector(".nav-list");

toggleBtn.addEventListener('click', () => navList.classList.toggle('show'));
navList.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => navList.classList.remove('show'))
);

/* ---------- 6. Share Button (native + fallback) ---------- */
const shareBtn = document.getElementById("share-btn");

if (shareBtn) { 
if (navigator.share) {
  // Native share
  shareBtn.addEventListener("click", async () => {
    try {
      await navigator.share({
        title: document.title,
        text: "Check out this awesome small-business landing page!",
        url: window.location.href
      });
    } catch (e) {
      return;
    }
  });
} else {
  shareBtn.textContent = "📋 Copy Link";
  shareBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      const original = shareBtn.textContent;
      shareBtn.textContent = "✅ Link Copied!";
      setTimeout(() => (shareBtn.textContent = original), 2000);
    } catch {
      // Older browsers without Clipboard API → prompt fallback
      prompt("Copy this link:", window.location.href);
    }
  });
}
}