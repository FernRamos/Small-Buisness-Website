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
const headlineInput = document.getElementById("headline-input");   // <input>
const updateBtn     = document.querySelector("#cta-form button");  // <button>
const heroHeadline  = document.getElementById("hero-title");       // <h2>

// Replace <h2> text on click
updateBtn.addEventListener("click", event => {
  event.preventDefault();                     // stop form reload
  const text = headlineInput.value.trim();
  if (text) {
    heroHeadline.textContent = text;
    headlineInput.value = "";                 // clear field
  }
});