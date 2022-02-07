'use strict';
const swiper = new Swiper('.swiper', {
  
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
      1000: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          allowSlideNext: false,
          allowSlidePrev: false
      }
  }
});


function InvalidMsg(textbox) {
    
    if (textbox.value == '') {
        textbox.setCustomValidity('Please enter your name');
    }
    // else if(textbox.validity.typeMismatch){
    //     textbox.setCustomValidity('please enter a valid email address');
    // }
    else {
        textbox.setCustomValidity('');
    }
    return true;
}



var burger = document.getElementById("burger");
var sideMenu = document.getElementById("side-menu");

burger.addEventListener("click", function(){
    sideMenu.classList.toggle("width");
    this.classList.toggle("rotateZ");
    
});

window.addEventListener("resize", function(){
    if(window.innerWidth > 760){
        sideMenu.classList.remove("width");
        burger.classList.remove("rotateZ");
    }
})


// emptyform
// function IsEmpty() {
//   if (document.forms['frm'].question.value === "") {
//     alert("empty");
//     return false;
//   }
//   return true;
// }