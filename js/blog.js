/* ===========================================================
   BLOG.JS — newsletter form (front-end only, no backend)
   =========================================================== */
(function () {
  "use strict";
  const form = document.getElementById("newsletter-form");
  const note = document.getElementById("newsletter-note");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector("input[type='email']");
    const value = input.value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    if (!valid) {
      note.textContent = "That doesn't look like a valid email — mind double-checking it?";
      note.style.color = "var(--danger)";
      input.focus();
      return;
    }
    note.textContent = "You're in. Look out for the first note next month.";
    note.style.color = "var(--sage)";
    form.reset();
  });
})();
