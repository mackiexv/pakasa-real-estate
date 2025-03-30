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

document.addEventListener("DOMContentLoaded", function () {
  /* --- Schedule Viewing Modal Functionality --- */
  const scheduleModal = document.getElementById("scheduleModal");
  const scheduleBtn = document.getElementById("scheduleBtn");
  const closeBtn = document.querySelector(".modal .close");
  const scheduleForm = document.getElementById("scheduleForm");

  if (scheduleBtn && scheduleModal) {
    scheduleBtn.addEventListener("click", function () {
      scheduleModal.style.display = "block";
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      scheduleModal.style.display = "none";
    });
  }
  window.addEventListener("click", function (event) {
    if (event.target === scheduleModal) {
      scheduleModal.style.display = "none";
    }
  });
  if (scheduleForm) {
    scheduleForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(scheduleForm);
      console.log("Schedule Viewing Submission:", Object.fromEntries(formData));
      alert("Thank you! Your viewing request has been submitted.");
      scheduleModal.style.display = "none";
      scheduleForm.reset();
    });
  }

  /* --- Menu Toggle for Responsive Navigation --- */
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  } else {
    console.error("menuToggle or navLinks not found!");
  }

  /* --- Scroll-to-Top Button --- */
  const scrollToTopBtn = document.getElementById("scrollToTop");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* --- Call Button --- */
  const callBtn = document.getElementById("callBtn");
  if (callBtn) {
    callBtn.addEventListener("click", function () {
      alert("Call us at: +31 688 955 894");
    });
  }
});
