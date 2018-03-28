const menuToggle = document.querySelector("#nav-toggle");
const nav = document.querySelector("#index");



menuToggle.addEventListener('click',
  e => {
    nav.classList.toggle('on');
    e.stopPropagation();
  }
);