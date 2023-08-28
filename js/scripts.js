$(document).ready(function (){
    $(".header__burger").click(function(){
        $(".header__nav").toggleClass("header__nav--open")
        $(".header__list").toggleClass("header__list--open")
        $(".header__line:nth-child(1)").toggleClass("header__line--first")
        $(".header__line:nth-child(2)").toggleClass("header__line--middle")
        $(".header__line:nth-child(3)").toggleClass("header__line--last")
    })

})
function renderTimer(hours, minutes, seconds) {
    const hoursDisplay = hours < 10 ? `0${hours}` : hours;
    const minutesDisplay = minutes < 10 ? `0${minutes}` : minutes;
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    document.getElementById('hours').textContent = hoursDisplay;
    document.getElementById('minutes').textContent = minutesDisplay;
    document.getElementById('seconds').textContent = secondsDisplay;
};

function startTimer(duration) {
    let timeLeft = duration;
    const intervalId = setInterval(() => {
      const hours = Math.floor((timeLeft / (60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / 60) % 60);
      const seconds = Math.floor(timeLeft % 60);
      renderTimer(hours, minutes, seconds);
      if (--timeLeft < 0) {
        timeLeft = duration;
      }
    }, 1000);
};

const timerDuration = 30 * 60; 
startTimer(timerDuration);




new Swiper ('.slider__slider', {
    // Optional parameters
    slidesPerView: 1,
    loop: true,
  
    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
  
    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
    el: '.swiper-scrollbar',
    },
  
    spaceBetween: 22,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
});
  
