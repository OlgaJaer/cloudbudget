const toggle = document.querySelector('.icon-menu')
const fixedMenu = document.querySelector('.fixed-menu')
const navLink = document.querySelectorAll(".fixed-menu__item-link")

toggle.addEventListener('click', (e) => {
  e.preventDefault()
  if (fixedMenu.classList.contains('fixed-menu__open')) {
    fixedMenu.classList.remove('fixed-menu__open')
    document.body.classList.remove('scroll-hidden')
  } else {
    fixedMenu.classList.add('fixed-menu__open')
    document.body.classList.add('scroll-hidden')
  }
})

for (let i = 0; i < navLink.length; i ++) {
  navLink[i].addEventListener("click", function () {
    fixedMenu.classList.remove('fixed-menu__open');
    document.body.classList.remove('scroll-hidden')
  });
}
