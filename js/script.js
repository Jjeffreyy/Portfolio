const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');

})

const counters = document.querySelectorAll('.skills__counter'),
      scales = document.querySelectorAll('.skills__scale span');

counters.forEach((item, i) =>{
    scales[i].style.width = item.innerHTML;
})
