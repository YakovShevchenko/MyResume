let menu = document.querySelector('.header-nav-menu');
let menuBtn = document.querySelector('.mobile-toggle');

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});

let anchors = document.querySelectorAll('a.header-nav-menu__link');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    let blockID = anchor.getAttribute('href');

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};