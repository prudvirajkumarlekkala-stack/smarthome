/* ===========================================================
   AUTH.JS — signup / login validation (front-end only)
   No backend exists here: this demonstrates real validation
   logic and a believable success state, with data kept only
   in memory for this page view.
   =========================================================== */
(function () {
  "use strict";

  /* ---------- Password show/hide ---------- */
  document.querySelectorAll(".pw-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.target);
      if (!target) return;
      const show = target.type === "password";
      target.type = show ? "text" : "password";
      btn.textContent = show ? "Hide" : "Show";
      btn.setAttribute("aria-label", show ? "Hide password" : "Show password");
    });
  });

  /* ---------- Password strength meter (signup only) ---------- */
  const suPassword = document.getElementById("su-password");
  if (suPassword) {
    const bar = document.querySelector("[data-strength-bar]");
    suPassword.addEventListener("input", () => {
      const v = suPassword.value;
      let score = 0;
      if (v.length >= 8) score++;
      if (/[A-Z]/.test(v)) score++;
      if (/[0-9]/.test(v)) score++;
      if (/[^A-Za-z0-9]/.test(v)) score++;

      const pct = (score / 4) * 100;
      const colors = ["#D97A6A", "#D97A6A", "#D98E4A", "#8FAE96", "#8FAE96"];
      bar.style.width = v.length ? `${Math.max(pct, 15)}%` : "0%";
      bar.style.background = colors[score];
    });
  }

  /* ---------- Shared validation helpers ---------- */
  function setError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const errorEl = document.querySelector(`.field-error[data-for="${fieldId}"]`);
    if (input) input.classList.toggle("invalid", Boolean(message));
    if (errorEl) errorEl.textContent = message || "";
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  /* ---------- Signup form ---------- */
  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("su-name");
      const email = document.getElementById("su-email");
      const password = document.getElementById("su-password");
      const confirm = document.getElementById("su-confirm");
      const terms = document.getElementById("su-terms");
      const status = document.getElementById("signup-status");

      let valid = true;

      if (name.value.trim().length < 2) {
        setError("su-name", "Enter your full name.");
        valid = false;
      } else setError("su-name", "");

      if (!isValidEmail(email.value)) {
        setError("su-email", "Enter a valid email address.");
        valid = false;
      } else setError("su-email", "");

      if (password.value.length < 8 || !/[0-9]/.test(password.value)) {
        setError("su-password", "Use at least 8 characters, including a number.");
        valid = false;
      } else setError("su-password", "");

      if (confirm.value !== password.value || confirm.value === "") {
        setError("su-confirm", "Passwords don't match.");
        valid = false;
      } else setError("su-confirm", "");

      if (!terms.checked) {
        setError("su-terms", "Please accept the Terms and Privacy Policy to continue.");
        valid = false;
      } else setError("su-terms", "");

      if (!valid) {
        status.textContent = "";
        status.className = "form-status";
        return;
      }

      status.textContent = `Welcome, ${name.value.trim().split(" ")[0]}. Your account is ready — redirecting you to log in...`;
      status.className = "form-status success";
      signupForm.querySelector("button[type='submit']").disabled = true;

      setTimeout(() => {
        window.location.href = "login.html";
      }, 1600);
    });
  }

  /* ---------- Login form ---------- */
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("li-email");
      const password = document.getElementById("li-password");
      const status = document.getElementById("login-status");

      let valid = true;

      if (!isValidEmail(email.value)) {
        setError("li-email", "Enter a valid email address.");
        valid = false;
      } else setError("li-email", "");

      if (password.value.length === 0) {
        setError("li-password", "Enter your password.");
        valid = false;
      } else setError("li-password", "");

      if (!valid) {
        status.textContent = "";
        status.className = "form-status";
        return;
      }

      status.textContent = "Looks good — checking your details...";
      status.className = "form-status success";

      setTimeout(() => {
        status.textContent = "This is a front-end demo, so there's no live account behind it — but the form works exactly like the real one will.";
        status.className = "form-status success";
      }, 1200);
    });
  }
})();
