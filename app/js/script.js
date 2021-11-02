const toggleBurger = document.querySelector('#toggle');
const body=document.querySelector('body');
const header=document.querySelector('.header');
const overlay=document.querySelector('.overlay');
const has_fade=document.querySelectorAll('.has-fade');


toggleBurger.addEventListener('click',function(){
    console.log("click burger");
    if(header.classList.contains('open')){
        body.classList.remove('nonscroll');
        has_fade.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');

        });
        header.classList.remove('open');
    }else{
        header.classList.add('open');
        body.classList.add('nonscroll');
        has_fade.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
})

var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });