// app.js

document.addEventListener("DOMContentLoaded", () => {
  // Open mobile menu
  const openMenuBtn = document.querySelector('[command="show-modal"]');
  const closeMenuBtn = document.querySelector('[command="close"]');
  const mobileMenu = document.getElementById("mobile-menu");

  if (openMenuBtn && closeMenuBtn && mobileMenu) {
    openMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.add("slide-in");
      mobileMenu.showModal();
    });

    closeMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("slide-in");
      mobileMenu.classList.add("slide-out");

      setTimeout(() => {
        mobileMenu.classList.remove("slide-out");
        mobileMenu.close();
      }, 300);
    });
  }

  // Product submenu toggle (mobile)
  const productToggleBtn = document.querySelector('[command="--toggle"]');
  const productMenu = document.getElementById("products");

  if (productToggleBtn && productMenu) {
    productToggleBtn.addEventListener("click", () => {
      productMenu.hidden = !productMenu.hidden;
    });
  }

  // Popover fade in/out (desktop)
  const popovers = document.querySelectorAll("[popover]");
  popovers.forEach((popover) => {
    popover.classList.add("fade-in");
    popover.addEventListener("toggle", () => {
      popover.dataset.open = popover.matches(":popover-open");
    });
  });
});
