const slides = document.querySelectorAll("div.mySlides");
const previousButton = document.querySelector("a.prev");
const nextButton = document.querySelector("a.next");

let slideIndex = 0;
let slideInterval = 0;

function playSlideshow() {
  if (slides) {
    slides.forEach((slide) => {
      slide.classList.remove("fadeIn");
    });
    slideIndex++;

    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }

    slides[slideIndex].classList.add("fadeIn");
  }
}

function showPreviousSlide() {
  clearInterval(slideInterval);

  slides.forEach((slide) => {
    slide.classList.remove("fadeIn");
  });
  slideIndex--;

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  slides[slideIndex].classList.add("fadeIn");
  slideInterval = setInterval(playSlideshow, 10000);
}

function showNextSlide() {
  clearInterval(slideInterval);

  slides.forEach((slide) => {
    slide.classList.remove("fadeIn");
  });
  slideIndex++;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  slides[slideIndex].classList.add("fadeIn");
  slideInterval = setInterval(playSlideshow, 10000);
}

window.addEventListener("load", () => {
  playSlideshow();
  slideInterval = setInterval(playSlideshow, 5000);
});

previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
