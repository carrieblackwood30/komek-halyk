const button = document.getElementById("burgerMenu")
const mobileMenu = document.querySelector(".mobile-nav-bar")
const langKz = document.querySelector(".langKz")
const langRu = document.querySelector(".langRu")
const blockKz = document.querySelectorAll('.kz')
const blockRu = document.querySelectorAll('.ru')

button.addEventListener('click', function() {
    let isToggled = false
    isToggled = !isToggled;
    mobileMenu.classList.toggle('active');
  });

langKz.addEventListener('click', () =>{
  blockKz.forEach(block =>{
    block.classList.add("active")
  })
  blockRu.forEach(block =>{
    block.classList.add("disabled")
  })
})

langRu.addEventListener('click', () =>{
  blockKz.forEach(block => {
    block.classList.remove("active")
  })
  blockRu.forEach(block =>{
    block.classList.remove("disabled")
  })
})