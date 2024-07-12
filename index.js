const button = document.getElementById("burgerMenu")
const mobileMenu = document.querySelector(".mobile-nav-bar")


button.addEventListener('click', function() {
    let isToggled = false
    isToggled = !isToggled;
    mobileMenu.classList.toggle('active');
  });