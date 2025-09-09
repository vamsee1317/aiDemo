// app.js

document.addEventListener("DOMContentLoaded", () => {
  // Open mobile menu
  const openMenuBtn = document.querySelector('[command="show-modal"]');
  const closeMenuBtn = document.querySelector('[command="close"]');
  const mobileMenu = document.getElementById("mobile-menu");

  if (openMenuBtn && closeMenuBtn && mobileMenu) {
    openMenuBtn.addEventListener("click", () => {
      mobileMenu.showModal();
    });

    closeMenuBtn.addEventListener("click", () => {
      mobileMenu.close();
    });

    // Smooth closing animation
    mobileMenu.addEventListener("close", () => {
      mobileMenu.setAttribute("closing", "");
      setTimeout(() => {
        mobileMenu.removeAttribute("closing");
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
});
