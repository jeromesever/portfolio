/* =====================================================
   Portfolio Scripts - Mark Jerome Reves
   1 Mobile menu | 2 Active link highlight
   3 Placeholder links | 4 Footer year
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {
  /* ---------- 1. Mobile navigation ---------- */
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");

  function setMenu(open) {
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }

  // Open/close when the hamburger button is clicked
  toggle.addEventListener("click", function () {
    setMenu(!menu.classList.contains("open"));
  });

  // Close the menu after a link is clicked
  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenu(false);
    });
  });

  // Dismiss the mobile menu when the user taps anywhere outside it.
  document.addEventListener("click", function (event) {
    if (
      menu.classList.contains("open") &&
      !menu.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      setMenu(false);
    }
  });

  // Close the menu with the Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu.classList.contains("open")) {
      setMenu(false);
      toggle.focus();
    }
  });

  // Reset the menu when the window is resized to desktop width
  window.addEventListener("resize", function () {
    if (window.innerWidth > 760) setMenu(false);
  });

  /* ---------- 2. Highlight the nav link of the section in view ---------- */
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("main section[id]");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navLinks.forEach(function (link) {
              const isCurrent = link.getAttribute("href") === "#" + entry.target.id;
              link.classList.toggle("active", isCurrent);
              if (isCurrent) {
                link.setAttribute("aria-current", "true");
              } else {
                link.removeAttribute("aria-current");
              }
            });
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" } // triggers when a section is near the middle of the screen
    );
    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ---------- 3. Placeholder links ----------
     Any link marked with data-link whose href is still "#" is
     disabled and labeled so visitors are not sent to a dead link.
     Once you replace "#" with a real URL, it becomes a normal link. */
  document.querySelectorAll("a[data-link]").forEach(function (link) {
    const href = link.getAttribute("href");
    if (href === "#" || href === "") {
      link.classList.add("is-disabled");
      link.setAttribute("aria-disabled", "true");
      link.setAttribute("tabindex", "-1");
      link.setAttribute("title", "Link coming soon");
      link.addEventListener("click", function (event) {
        event.preventDefault();
      });
    }
  });

  /* ---------- 4. Footer year (always the current year) ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
