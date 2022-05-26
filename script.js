const menuOpen = document.querySelector(".nav-toogle");
const menuClose = document.querySelector(".top-nav .menu-close");
const menuWrapper = document.querySelector(".top-nav .menu-wrapper");
const topBannerOverlay = document.querySelector(".top-banner-overlay");

function toggleMenu() {
  menuOpen.addEventListener("click", () => {
    menuWrapper.classList.add("is-opened");
    topBannerOverlay.classList.add("is-moved");
  });
  
  menuClose.addEventListener("click", () => {
    menuWrapper.classList.remove("is-opened");
    topBannerOverlay.classList.remove("is-moved");
  });
}

toggleMenu();




// Slider//////////////////////////////////////
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("slide-thumbnail");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  console.log(slideIndex);

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      // slides[i].style.display = "inline";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // slides[slideIndex-1].style.display = "inline";
  dots[slideIndex-1].className += " active";
  
//Adding the order number for elements in thumbnail list
  const thumbElement = document.querySelectorAll('.slide-num');
  for(let i = 0; i < thumbElement.length; i++){
    thumbElement[i].innerHTML = ('00'+(i+1)).slice(-2) ;
  };

}