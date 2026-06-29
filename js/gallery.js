/* ===========================================================
   GALLERY.JS — category filter
   =========================================================== */
(function () {
  "use strict";
  const chips = document.querySelectorAll(".filter-chip");
  const cards = document.querySelectorAll(".gallery-card");
  if (!chips.length) return;

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => { c.classList.remove("is-active"); c.setAttribute("aria-selected", "false"); });
      chip.classList.add("is-active");
      chip.setAttribute("aria-selected", "true");

      const filter = chip.dataset.filter;
      cards.forEach((card) => {
        const match = filter === "all" || card.dataset.cat === filter;
        card.classList.toggle("is-hidden", !match);
      });
    });
  });
})();
