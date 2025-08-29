/*
window.myCustomFunction = function () {
  const slides = document.querySelectorAll('.slide');
  const controls = document.querySelectorAll('.control');
  let activeSlide = 0;
  let prevActive = 0;

  function changeSlides() {
    slides[prevActive].classList.remove('active');
    controls[prevActive].classList.remove('active');

    slides[activeSlide].classList.add('active');
    controls[activeSlide].classList.add('active');

    prevActive = activeSlide;
    activeSlide = (activeSlide + 1) % slides.length; // loop back to 0
  }

  // Run every 4 seconds
  let int = setInterval(changeSlides, 4000);

  // Click events for controls
  controls.forEach((control, idx) => {
    control.addEventListener('click', () => {
      activeSlide = idx;
      changeSlides();
      clearInterval(int);
      int = setInterval(changeSlides, 4000);
    });
  });

  // Initialize
  slides[0].classList.add('active');
  controls[0].classList.add('active');
};
*/
window.myCustomFunction = function () {
  const slides = document.querySelectorAll(".slider-item");
let index = 0;

function showSlide(i) {
  slides.forEach((s, idx) => {
    s.style.display = idx === i ? "block" : "none";
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

showSlide(index);
setInterval(nextSlide, 3000); // auto every 3s
}